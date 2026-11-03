export function initNavbar() {
  const btn = document.getElementById("menuBtn");
  const mobile = document.getElementById("mobileMenu");
  if (btn && mobile) {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isExpanded));
      mobile.classList.toggle("hidden", isExpanded);
    });
  }
}
