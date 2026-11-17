/* NORMAL CABINET HOTEL — page behaviour
   language · header index · drawer sites · leaflet map · lightbox · booking */
(function () {
  "use strict";

  var I18N = window.I18N || {};
  var CFG = window.SITE_CONFIG || {};
  var LANGS = ["ko", "en", "zh"];
  var KEY = "nc-lang";
  var lang = "ko";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── sites data ───────────────────────────────────────────── */
  var SITES = {
    gyodong: {
      code: "GYODONG · 01",
      label: "GYODONG",
      lat: 35.873066,
      lng: 128.598453,
      zoom: 17,
      coord: "35.8731°N 128.5984°E",
      addrKo: "대구광역시 중구 교동2길 29-11",
      park: { lat: 35.873675, lng: 128.598362, r: 26, approx: false },
      naver: "https://map.naver.com/p/search/%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EA%B5%90%EB%8F%992%EA%B8%B8%2029-11",
      kakao: "https://map.kakao.com/?q=%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EA%B5%90%EB%8F%992%EA%B8%B8%2029-11",
      google: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EA%B5%AC%20%EC%A4%91%EA%B5%AC%20%EA%B5%90%EB%8F%992%EA%B8%B8%2029-11"
    },
    dongdaegu: {
      code: "DONGDAEGU STN. · 02",
      label: "DONGDAEGU",
      lat: 35.877599,
      lng: 128.640262,
      zoom: 17,
      coord: "35.8776°N 128.6403°E",
      addrKo: "대구광역시 동구 효목로 50",
      park: { lat: 35.87779, lng: 128.63986, r: 44, approx: true },
      naver: "https://map.naver.com/p/search/%EB%8C%80%EA%B5%AC%20%EB%8F%99%EA%B5%AC%20%ED%9A%A8%EB%AA%A9%EB%A1%9C%2050",
      kakao: "https://map.kakao.com/?q=%EB%8C%80%EA%B5%AC%20%EB%8F%99%EA%B5%AC%20%ED%9A%A8%EB%AA%A9%EB%A1%9C%2050",
      google: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EA%B5%AC%20%EB%8F%99%EA%B5%AC%20%ED%9A%A8%EB%AA%A9%EB%A1%9C%2050"
    }
  };

  /* 동대구역점 객실 — airbnb-listings-master 기준 (호수 · 에어비앤비 리스팅 ID · 체크인/아웃)
     출입 비밀번호는 절대 이 파일에 넣지 않습니다. */
  var ROOMS = [
    { no: "201", id: "1662251362905057666", in: "14:00", out: "11:00" },
    { no: "202", id: "1679658993277741399", in: "14:00", out: "11:00" },
    { no: "203", id: "1679661627721861120", in: "16:00", out: "13:00" },
    { no: "204", id: "1679663639580100479", in: "16:00", out: "13:00" },
    { no: "205", id: "1679665260759843827", in: "14:00", out: "11:00" },
    { no: "206", id: "1679666774352851972", in: "14:00", out: "11:00" },
    { no: "301", id: "1679668531627579485", in: "16:00", out: "13:00" },
    { no: "302", id: "1679670440900968827", in: "16:00", out: "13:00" },
    { no: "303", id: "1679672231477216551", in: "14:00", out: "11:00" },
    { no: "304", id: "1679673586045154733", in: "14:00", out: "11:00" },
    { no: "305", id: "1679683546665797121", in: "16:00", out: "13:00" },
    { no: "306", id: "1680494356453763511", in: "15:00", out: "12:00" },
    { no: "307", id: "1680496097438512804", in: "15:00", out: "12:00" },
    { no: "308", id: "1680496919979325471", in: "15:00", out: "12:00" },
    { no: "401", id: "1680499029608289750", in: "15:00", out: "12:00" },
    { no: "402", id: "1680500232001228003", in: "15:00", out: "12:00" },
    { no: "403", id: "1680504013183975583", in: "15:00", out: "12:00" },
    { no: "404", id: "1680508697660115228", in: "15:00", out: "12:00" },
    { no: "405", id: "1681302416681256554", in: "15:00", out: "12:00" },
    { no: "406", id: "1681304093437773656", in: "16:00", out: "13:00" },
    { no: "407", id: "1681741068532219640", in: "15:00", out: "12:00" },
    { no: "408", id: "1681863626733456978", in: "15:00", out: "12:00" }
  ];
  var DGD_201 = "https://www.airbnb.co.kr/rooms/1662251362905057666";
  var activeSite = "gyodong";

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

  function dict() { return I18N[lang] || I18N.ko || {}; }

  function apply(l) {
    var d = I18N[l] || I18N.ko || {};
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      if (d[k] != null) el.setAttribute("placeholder", d[k]);
    });
    document.querySelectorAll(".lang button, .ft-lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === l ? "true" : "false");
    });
    if (d["meta.title"]) document.title = d["meta.title"];
    var md = document.querySelector('meta[name="description"]');
    if (md && d["meta.desc"]) md.setAttribute("content", d["meta.desc"]);
  }

  function setLang(l, store) {
    if (LANGS.indexOf(l) === -1) l = "ko";
    lang = l;
    apply(l);
    if (store !== false) { try { localStorage.setItem(KEY, l); } catch (e) {} }
    try {
      var u = new URL(window.location.href);
      u.searchParams.set("lang", l);
      history.replaceState(null, "", u.toString());
    } catch (e) {}
    document.dispatchEvent(new CustomEvent("nc:lang", { detail: l }));
  }

  document.querySelectorAll(".lang button, .ft-lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  /* ── contact config ───────────────────────────────────────── */
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

  /* ── header: scrolled state, progress, section index ──────── */
  var hdr = document.getElementById("hdr");
  var heroEl = document.getElementById("top");
  var progress = document.getElementById("hdrProgress");
  var idxEl = document.getElementById("hdrIndex");
  var sections = Array.prototype.slice.call(document.querySelectorAll("[data-index]"));

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (hdr) {
      var trigger = heroEl ? Math.min(window.innerHeight * 0.7, 640) : 80;
      hdr.classList.toggle("scrolled", y > trigger);
      document.body.classList.toggle("past-hero", y > trigger + 40);
    }
    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";
    }
    if (idxEl && sections.length) {
      var mid = y + window.innerHeight * 0.42;
      var cur = sections[0];
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= mid) cur = sections[i];
      }
      var code = cur.getAttribute("data-index");
      if (idxEl.textContent !== code) idxEl.textContent = code;
    }
    if (!reduceMotion && heroEl && window.innerWidth >= 900) {
      var media = document.getElementById("heroMedia");
      if (media) media.style.transform = "translate3d(0," + Math.min(y * 0.12, 90) + "px,0)";
    }
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ── reveal ───────────────────────────────────────────────── */
  var rv = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    rv.forEach(function (el) { io.observe(el); });
  } else {
    rv.forEach(function (el) { el.classList.add("in"); });
  }

  /* ── key card flip ────────────────────────────────────────── */
  var kc = document.getElementById("keycard");
  if (kc) {
    kc.addEventListener("click", function () {
      var on = kc.getAttribute("aria-pressed") === "true";
      kc.setAttribute("aria-pressed", on ? "false" : "true");
    });
  }

  /* ── gallery lightbox ─────────────────────────────────────── */
  var gal = document.getElementById("gal");
  if (gal) {
    var items = Array.prototype.slice.call(gal.querySelectorAll("button[data-full]"));
    var lb = document.getElementById("lb");
    var lbImg = document.getElementById("lbImg");
    var lbCount = document.getElementById("lbCount");
    var idx = 0;
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function show(i) {
      idx = (i + items.length) % items.length;
      var b = items[idx];
      var src = b.getAttribute("data-full");
      var im = b.querySelector("img");
      lbImg.src = src;
      lbImg.alt = im ? im.alt : "";
      if (lbCount) lbCount.textContent = pad(idx + 1) + " / " + pad(items.length);
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
    items.forEach(function (b, i) { b.addEventListener("click", function () { open(i); }); });
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

  /* ── map ──────────────────────────────────────────────────── */
  var mapEl = document.getElementById("map");
  var mapFallback = document.getElementById("mapFallback");
  var mapName = document.getElementById("mapName");
  var mapCoord = document.getElementById("mapCoord");
  var map = null;
  var layers = {};
  var mapReady = false;

  function buildLayer(key) {
    var L = window.L;
    var s = SITES[key];
    var g = L.layerGroup();
    L.marker([s.lat, s.lng], {
      title: s.label,
      icon: L.divIcon({
        className: "mk-wrap",
        html: '<span class="mk"><b>' + (key === "gyodong" ? "01" : "02") + "</b><i>" + s.label + "</i></span>",
        iconSize: null,
        iconAnchor: [0, 0]
      })
    }).addTo(g);
    L.circle([s.park.lat, s.park.lng], {
      radius: s.park.r,
      color: "#b4553c",
      weight: 1,
      opacity: 0.55,
      dashArray: s.park.approx ? "3 3" : null,
      fillColor: "#b4553c",
      fillOpacity: 0.08
    }).addTo(g);
    L.marker([s.park.lat, s.park.lng], {
      title: "PARKING",
      icon: L.divIcon({
        className: "mk-wrap",
        html: '<span class="mk mk-park"><b>P</b></span>',
        iconSize: null,
        iconAnchor: [0, 0]
      })
    }).addTo(g);
    return g;
  }

  function focusMap(key, animate) {
    if (!map) return;
    var s = SITES[key];
    if (layers[key] && !map.hasLayer(layers[key])) layers[key].addTo(map);
    Object.keys(layers).forEach(function (k) {
      if (k !== key && map.hasLayer(layers[k])) map.removeLayer(layers[k]);
    });
    var opts = { animate: !!animate, duration: 0.6 };
    if (animate) map.flyTo([s.lat, s.lng], s.zoom, { duration: 0.9 });
    else map.setView([s.lat, s.lng], s.zoom, { animate: false });
    if (mapName) mapName.textContent = s.code;
    if (mapCoord) mapCoord.textContent = s.coord;
  }

  function initMap() {
    if (map || mapReady) return;
    if (!window.L) {
      if (mapFallback) mapFallback.hidden = false;
      if (mapEl) mapEl.style.display = "none";
      return;
    }
    mapReady = true;
    var L = window.L;
    map = L.map(mapEl, {
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: true,
      keyboard: true
    });
    L.control.zoom({ position: "bottomright" }).addTo(map);
    /* OSM tiles washed to warm paper in CSS — quiet, keyless, and reliable */
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.attributionControl.setPrefix("");
    layers.gyodong = buildLayer("gyodong");
    layers.dongdaegu = buildLayer("dongdaegu");
    focusMap(activeSite, false);
    map.on("click", function () { map.scrollWheelZoom.enable(); });
    map.on("mouseout", function () { map.scrollWheelZoom.disable(); });
  }

  if (mapEl) {
    if ("IntersectionObserver" in window) {
      var mapIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { initMap(); mapIO.disconnect(); }
        });
      }, { rootMargin: "300px 0px" });
      mapIO.observe(mapEl);
    } else {
      initMap();
    }
    window.addEventListener("load", function () {
      if (!mapReady && !window.L) {
        if (mapFallback) mapFallback.hidden = false;
        mapEl.style.display = "none";
      }
    });
  }

  /* ── site drawer + locate panels + booking sync ───────────── */
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-site-tab]"));
  var panels = Array.prototype.slice.call(document.querySelectorAll("[data-site-panel]"));
  var locatePanels = Array.prototype.slice.call(document.querySelectorAll("[data-locate-panel]"));
  var linkNaver = document.getElementById("linkNaver");
  var linkKakao = document.getElementById("linkKakao");
  var linkGoogle = document.getElementById("linkGoogle");
  var locAddr = document.getElementById("locAddr");
  var copyBtn = document.getElementById("copyAddr");
  var copyTimer = null;

  /* ── address copy ─────────────────────────────────────────── */
  function resetCopy() {
    if (!copyBtn) return;
    clearTimeout(copyTimer);
    copyBtn.classList.remove("is-done");
    var sp = copyBtn.querySelector("span");
    if (sp) sp.textContent = dict()["locate.copy"] || "주소 복사";
  }

  function markCopied() {
    if (!copyBtn) return;
    var sp = copyBtn.querySelector("span");
    copyBtn.classList.add("is-done");
    if (sp) sp.textContent = dict()["locate.copied"] || "복사됨";
    clearTimeout(copyTimer);
    copyTimer = setTimeout(resetCopy, 1800);
  }

  function copyText(text) {
    var done = false;
    function ok() { if (!done) { done = true; markCopied(); } }
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(ok).catch(legacy);
      return;
    }
    legacy();
    function legacy() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;";
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      try { document.execCommand("copy"); ok(); } catch (e) {}
      document.body.removeChild(ta);
      if (!done) ok();
    }
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      copyText(SITES[activeSite].addrKo);
    });
  }

  function setSite(key, opts) {
    if (!SITES[key]) return;
    activeSite = key;

    tabs.forEach(function (t) {
      var on = t.getAttribute("data-site-tab") === key;
      t.classList.toggle("is-on", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (p) {
      var on = p.getAttribute("data-site-panel") === key;
      p.hidden = !on;
      p.classList.toggle("is-on", on);
    });
    locatePanels.forEach(function (p) {
      p.classList.toggle("is-on", p.getAttribute("data-locate-panel") === key);
    });
    var s = SITES[key];
    if (linkNaver) linkNaver.href = s.naver;
    if (linkKakao) linkKakao.href = s.kakao;
    if (linkGoogle) linkGoogle.href = s.google;
    if (mapName) mapName.textContent = s.code;
    if (mapCoord) mapCoord.textContent = s.coord;
    if (locAddr) {
      locAddr.setAttribute("data-i18n", key + ".addr");
      locAddr.textContent = dict()[key + ".addr"] || s.addrKo;
    }
    if (copyBtn) resetCopy();
    if (map) focusMap(key, true);

    /* booking bar follows the drawer */
    if (typeof window.NC.setBookingBranch === "function") window.NC.setBookingBranch(key);
    if (opts && opts.focusTab) {
      var t = tabs.filter(function (x) { return x.getAttribute("data-site-tab") === key; })[0];
      if (t) t.focus({ preventScroll: true });
    }
  }

  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { setSite(t.getAttribute("data-site-tab")); });
    t.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      var next = (i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      setSite(tabs[next].getAttribute("data-site-tab"), { focusTab: true });
    });
  });

  /* ── booking bar ──────────────────────────────────────────── */
  var bbForm = document.getElementById("bbForm");
  var bbBranch = "dongdaegu";
  var bbGoLabel = document.getElementById("bbGoLabel");
  var bbNote = document.getElementById("bbNote");

  function bbRefresh() {
    var d = dict();
    var gyo = bbBranch === "gyodong";
    var bbGo = document.getElementById("bbGo");
    var bbIn = document.getElementById("bbIn");
    var bbOut = document.getElementById("bbOut");
    var bbGuests = document.getElementById("bbGuests");
    document.querySelectorAll("[data-bb]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-bb") === bbBranch ? "true" : "false");
    });
    var url;
    if (gyo) {
      url = "https://cderses.github.io/normal-cabinet-gyodong/?lang=" + encodeURIComponent(lang);
    } else {
      url = "https://www.airbnb.co.kr/rooms/1662251362905057666" +
        "?check_in=" + encodeURIComponent(bbIn.value) +
        "&check_out=" + encodeURIComponent(bbOut.value) +
        "&adults=" + encodeURIComponent(bbGuests.value);
    }
    if (bbGo) bbGo.setAttribute("href", url);
    if (bbGoLabel) bbGoLabel.textContent = d[gyo ? "bb.goGyo" : "bb.pickDgd"] || "";
    if (bbNote) bbNote.textContent = d[gyo ? "bb.noteGyo" : "bb.noteDgd"] || "";
  }

  if (bbForm) {
    var bbIn = document.getElementById("bbIn");
    var bbOut = document.getElementById("bbOut");
    var bbGuests = document.getElementById("bbGuests");

    function iso(d) {
      var m = d.getMonth() + 1, day = d.getDate();
      return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
    }
    var now = new Date();
    var tmr = new Date(now.getTime() + 864e5);
    if (bbIn && !bbIn.value) { bbIn.value = iso(now); bbIn.min = iso(now); }
    if (bbOut && !bbOut.value) { bbOut.value = iso(tmr); bbOut.min = iso(tmr); }

    if (bbIn) {
      bbIn.addEventListener("change", function () {
        bbOut.min = bbIn.value;
        if (!bbOut.value || bbOut.value <= bbIn.value) {
          var n = new Date(bbIn.value + "T12:00:00");
          n.setDate(n.getDate() + 1);
          bbOut.value = iso(n);
        }
      });
    }

    document.querySelectorAll("[data-bb]").forEach(function (b) {
      b.addEventListener("click", function () {
        bbBranch = b.getAttribute("data-bb");
        bbRefresh();
        setSite(bbBranch);
      });
    });
    [bbIn, bbOut, bbGuests].forEach(function (el) {
      if (el) el.addEventListener("change", bbRefresh);
    });
    bbForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var go = document.getElementById("bbGo");
      if (go) go.click();
    });

    window.NC = window.NC || {};
    window.NC.setBookingBranch = function (key) {
      if (key !== "gyodong" && key !== "dongdaegu") return;
      bbBranch = key;
      bbRefresh();
    };
    bbRefresh();
  }

  document.addEventListener("nc:lang", function () {
    if (bbForm) bbRefresh();
    resetCopy();
    if (pick && !pick.hidden) buildPick();
  });

  /* ── room picker · 동대구역점 ────────────────────────────── */
  var pick = document.getElementById("pick");
  var pickList = document.getElementById("pickList");
  var pickDates = document.getElementById("pickDates");
  var pickClose = document.getElementById("pickClose");
  var pickScrim = document.getElementById("pickScrim");
  var bbInEl = document.getElementById("bbIn");
  var bbOutEl = document.getElementById("bbOut");
  var bbGuestsEl = document.getElementById("bbGuests");
  var arrow =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';

  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  function shortDate(v) {
    if (!v) return "";
    var p = v.split("-");
    if (p.length < 3) return v;
    var y = +p[0], m = +p[1], d = +p[2];
    var thisYear = new Date().getFullYear();
    return (y !== thisYear ? y + "." : "") + pad2(m) + "." + pad2(d);
  }

  function pickQuery() {
    return (
      "?check_in=" + encodeURIComponent(bbInEl ? bbInEl.value : "") +
      "&check_out=" + encodeURIComponent(bbOutEl ? bbOutEl.value : "") +
      "&adults=" + encodeURIComponent(bbGuestsEl ? bbGuestsEl.value : "2")
    );
  }

  function buildPick() {
    if (!pickList) return;
    var d = dict();
    if (pickDates) {
      var meta = (d["pick.meta"] || "{d} · {n}명")
        .replace("{d}", shortDate(bbInEl ? bbInEl.value : "") + " – " + shortDate(bbOutEl ? bbOutEl.value : ""))
        .replace("{n}", bbGuestsEl ? bbGuestsEl.value : "2");
      pickDates.textContent = meta;
    }
    var q = pickQuery();
    pickList.textContent = "";
    ["2", "3", "4"].forEach(function (floor) {
      var rooms = ROOMS.filter(function (r) { return r.no.charAt(0) === floor; });
      if (!rooms.length) return;
      var head = document.createElement("p");
      head.className = "pk-floor";
      head.textContent = floor + "F";
      pickList.appendChild(head);
      var grid = document.createElement("div");
      grid.className = "pk-grid";
      rooms.forEach(function (r) {
        var a = document.createElement("a");
        a.className = "pk-row";
        a.href = "https://www.airbnb.co.kr/rooms/" + r.id + q;
        a.target = "_blank";
        a.rel = "noopener";
        a.setAttribute("aria-label", r.no + " · " + r.in + " → " + r.out);
        a.innerHTML =
          '<span class="pk-no">' + r.no + '</span>' +
          '<span class="pk-time"><i' + (r.out === "13:00" ? ' class="is-late"' : "") + ">" +
          r.in + " → " + r.out + "</i></span>" + arrow;
        grid.appendChild(a);
      });
      pickList.appendChild(grid);
    });
  }

  function openPick() {
    if (!pick) return;
    buildPick();
    pick.hidden = false;
    document.body.classList.add("pick-open");
    window.requestAnimationFrame(function () { pick.classList.add("on"); });
    if (pickClose) pickClose.focus();
  }

  function closePick() {
    if (!pick || pick.hidden) return;
    pick.classList.remove("on");
    document.body.classList.remove("pick-open");
    window.setTimeout(function () { pick.hidden = true; }, 240);
    var go = document.getElementById("bbGo");
    if (go) go.focus();
  }

  if (pick) {
    if (pickClose) pickClose.addEventListener("click", closePick);
    if (pickScrim) pickScrim.addEventListener("click", closePick);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !pick.hidden) closePick();
    });
  }

  Array.prototype.slice.call(document.querySelectorAll("[data-open-pick]")).forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (el.id === "bbGo" && bbBranch !== "dongdaegu") return;
      e.preventDefault();
      openPick();
    });
  });

  /* ── start ────────────────────────────────────────────────── */
  setLang(detectLang(), false);
  applyContact();
  window.NC = window.NC || {};
  window.NC.setLang = setLang;
  window.NC.getLang = function () { return lang; };
  window.NC.applyContact = applyContact;
  window.NC.setSite = setSite;
})();
