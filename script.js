const navbar = document.querySelector("nav");
const navToggle = document.querySelector(".nav-toggle");
const backToTop = document.getElementById("backToTop");

// Shrink nav
window.addEventListener("scroll", () => {
  if (window.innerWidth > 768 && window.scrollY > 80) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }

  // Back-to-top
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Burger toggle
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
