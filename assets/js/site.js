/* NORMAL CABINET HOTEL — page behaviour: language, header, reveal, gallery, config */
(function () {
  "use strict";

  var I18N = window.I18N || {};
  var CFG = window.SITE_CONFIG || {};
  var LANGS = ["ko", "en", "zh"];
  var KEY = "nc-lang";
  var lang = "ko";

  /* ── language ─────────────────────────────────────────────── */
  function detectLang() {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q && I18N[q]) return q;
    try {
      var s = localStorage.getItem(KEY);
      if (s && I18N[s]) return s;
    } catch (e) {}
    var nav = (navigator.language || "").toLowerCase();
    if (nav.indexOf("zh") === 0) return "zh";
    if (nav.indexOf("en") === 0) return "en";
    return "ko";
  }

  function apply(l) {
    var dict = I18N[l] || I18N.ko;
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
    });
    document.querySelectorAll(".lang button, .ft-lang button").forEach(function (b) {
      var on = b.getAttribute("data-lang") === l;
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    if (dict["meta.title"]) document.title = dict["meta.title"];
    var md = document.querySelector('meta[name="description"]');
    if (md && dict["meta.desc"]) md.setAttribute("content", dict["meta.desc"]);
    var ogt = document.querySelector('meta[property="og:title"]');
    if (ogt) ogt.setAttribute("content", "NORMAL CABINET HOTEL · EST. 2026");
  }

  function setLang(l, store) {
    if (LANGS.indexOf(l) === -1) l = "ko";
    lang = l;
    apply(l);
    if (store !== false) {
      try { localStorage.setItem(KEY, l); } catch (e) {}
    }
    try {
      var u = new URL(window.location.href);
      u.searchParams.set("lang", l);
      history.replaceState(null, "", u.toString());
    } catch (e) {}
    document.dispatchEvent(new CustomEvent("nc:lang", { detail: l }));
  }

  document.querySelectorAll(".lang button, .ft-lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      setLang(b.getAttribute("data-lang"));
    });
  });

  /* ── contact config (Open KakaoTalk) ───────────────────────── */
  function applyContact() {
    var url = (CFG.kakaoUrl || "").trim();
    ["heroKakao", "infoKakao", "ftKakao", "cbKakao"].forEach(function (id) {
      var n = document.getElementById(id);
      if (!n) return;
      if (url) {
        n.href = url;
        n.hidden = false;
        n.removeAttribute("aria-hidden");
        n.target = "_blank";
        n.rel = "noopener";
      } else {
        n.hidden = true;
        n.setAttribute("aria-hidden", "true");
        n.setAttribute("href", "#");
      }
    });
  }

  /* ── header state ─────────────────────────────────────────── */
  var hdr = document.getElementById("hdr");
  var hero = document.getElementById("top");
  function onScroll() {
    if (!hdr) return;
    var trigger = hero ? Math.min(window.innerHeight * 0.72, 620) : 80;
    hdr.classList.toggle("scrolled", window.scrollY > trigger);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── reveal ───────────────────────────────────────────────── */
  var rv = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    rv.forEach(function (el) { io.observe(el); });
  } else {
    rv.forEach(function (el) { el.classList.add("in"); });
  }

  /* ── gallery lightbox ─────────────────────────────────────── */
  var gal = document.getElementById("gal");
  if (gal) {
    var items = Array.prototype.slice.call(gal.querySelectorAll("button[data-full]"));
    var lb = document.getElementById("lb");
    var lbImg = document.getElementById("lbImg");
    var idx = 0;

    function show(i) {
      idx = (i + items.length) % items.length;
      var src = items[idx].getAttribute("data-full");
      var alt = items[idx].querySelector("img") ? items[idx].querySelector("img").alt : "";
      lbImg.src = src;
      lbImg.alt = alt;
    }
    function open(i) {
      show(i);
      lb.classList.add("on");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lb.classList.remove("on");
      document.body.style.overflow = "";
      lbImg.src = "";
    }
    items.forEach(function (b, i) {
      b.addEventListener("click", function () { open(i); });
    });
    document.getElementById("lbClose").addEventListener("click", close);
    document.getElementById("lbPrev").addEventListener("click", function () { show(idx - 1); });
    document.getElementById("lbNext").addEventListener("click", function () { show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("on")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  /* ── city filter (All / Daegu / Seoul / Busan) ─────────────── */
  var cityTabs = document.querySelectorAll("[data-city-tab]");
  var cityRows = document.querySelectorAll("[data-city-row]");
  var teasers = document.querySelectorAll(".teaser[data-city]");
  var nextRow = document.querySelector(".city-row-next");

  function filterCity(city) {
    cityTabs.forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-city-tab") === city ? "true" : "false");
    });
    cityRows.forEach(function (row) {
      var key = row.getAttribute("data-city-row");
      var show = city === "all" || key === city || (key === "next" && (city === "seoul" || city === "busan"));
      row.hidden = !show;
    });
    teasers.forEach(function (t) {
      t.hidden = city !== "all" && t.getAttribute("data-city") !== city;
    });
    if (nextRow) {
      nextRow.classList.toggle("one", city === "seoul" || city === "busan");
    }
    document.querySelectorAll("#branches .rv").forEach(function (el) {
      el.classList.add("in");
    });
  }

  cityTabs.forEach(function (b) {
    b.addEventListener("click", function () {
      filterCity(b.getAttribute("data-city-tab"));
    });
  });

  /* ── start ────────────────────────────────────────────────── */
  setLang(detectLang(), false);
  applyContact();
  window.NC = { setLang: setLang, getLang: function () { return lang; }, applyContact: applyContact };
})();
