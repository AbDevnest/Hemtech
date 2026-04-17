// Navbar js
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

// Open
menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

// Close
closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Click outside
overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});



// top button Js start
const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
 if (window.scrollY > 300) {
  backToTopBtn.classList.add("show");
 } else {
  backToTopBtn.classList.remove("show");
 }
});

// Scroll to Top Smoothly on Click
backToTopBtn.addEventListener("click", () => {
 window.scrollTo({ top: 0, behavior: "smooth" });
});



