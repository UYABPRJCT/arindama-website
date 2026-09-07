// =========================
// MOBILE MENU
// =========================

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    mobileMenuBtn.innerHTML = "✕";
  } else {
    mobileMenuBtn.innerHTML = "☰";
  }
});
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");

    mobileMenuBtn.innerHTML = "☰";
  });
});
