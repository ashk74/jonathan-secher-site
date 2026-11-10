/* Progressive enhancement: reveal content as it enters the viewport. */
(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) return;
  const targets = document.querySelectorAll("main .section-heading, main .card, main .method-step, main .page-hero-image, main .about-panel, main .callout");
  if (!targets.length) return;
  document.documentElement.classList.add("reveal-ready");
  targets.forEach((el, index) => {
    el.classList.add("reveal");
    el.style.transitionDelay = (Math.min(index % 4, 3) * 65) + "ms";
  });
  const observer = new IntersectionObserver((entries, current) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      current.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  targets.forEach(el => observer.observe(el));
})();