/* NORMAL CABINET HOTEL — v9 quiet reveal */
(function () {
  "use strict";

  var els = document.querySelectorAll("[data-rv]");
  if (!els.length) return;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("js");

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

  els.forEach(function (el) { io.observe(el); });
})();
