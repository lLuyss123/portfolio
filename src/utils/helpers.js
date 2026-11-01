export function initNavbar() {
  const btn = document.getElementById("menuBtn");
  const mobile = document.getElementById("mobileMenu");
  if (btn && mobile) {
    btn.addEventListener("click", () => mobile.classList.toggle("hidden"));
  }
}

export function initTechnologyCarousel() {
  const carousel = document.querySelector("[data-technology-carousel]");
  if (!carousel) return;

  const track = carousel.querySelector("[data-carousel-track]");
  const previous = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const progress = carousel.querySelector("[data-carousel-progress]");
  const update = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const position = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    progress.style.transform = `scaleX(${position})`;
    previous.disabled = track.scrollLeft <= 1;
    next.disabled = track.scrollLeft >= maxScroll - 1;
  };
  const scroll = (direction) => {
    const card = track.querySelector(".technology-card");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap) * 2, behavior });
  };

  previous.addEventListener("click", () => scroll(-1));
  next.addEventListener("click", () => scroll(1));
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
