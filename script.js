const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = menuBtn?.querySelector("i");

window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

menuBtn?.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  menuIcon?.classList.toggle("fa-bars", isOpen);
  menuIcon?.classList.toggle("fa-xmark", !isOpen);
});

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn?.setAttribute("aria-expanded", "false");
    menuBtn?.setAttribute("aria-label", "Open menu");
    menuIcon?.classList.add("fa-bars");
    menuIcon?.classList.remove("fa-xmark");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => link.classList.remove("active"));

      const active = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`,
      );
      if (active) active.classList.add("active");
    });
  },
  { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
);

sections.forEach((section) => observer.observe(section));
