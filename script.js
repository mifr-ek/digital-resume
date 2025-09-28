document.addEventListener("DOMContentLoaded", () => {
  // Hamburger-menu funktion
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active"); // vis/skjul menu links
    hamburger.classList.toggle("open"); // kryds-animation
  });

  // Fade-in sektioner
  const faders = document.querySelectorAll(".fade-in");
  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );
  faders.forEach((fader) => appearOnScroll.observe(fader));

  // Profil sektion side-ind
  const profileLeft = document.querySelector(".fade-left");
  const profileRight = document.querySelector(".fade-right");
  const profileObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target.classList.contains("fade-left"))
          entry.target.classList.add("appear-left");
        if (entry.target.classList.contains("fade-right"))
          entry.target.classList.add("appear-right");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );
  if (profileLeft) profileObserver.observe(profileLeft);
  if (profileRight) profileObserver.observe(profileRight);
});

// Shrink nav on scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});
