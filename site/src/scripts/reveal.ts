const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReduced) {
  const els = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]")
  );

  // set transition delay from data-delay (optional)
  for (const el of els) {
    const d = el.getAttribute("data-delay");
    if (d) el.style.setProperty("--reveal-delay", `${Number(d)}ms`);
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("is-in");
          io.unobserve(e.target);
        }
      }
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  els.forEach((el) => io.observe(el));
}
