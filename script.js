// DESKTOP DROPDOWNS

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {

  const btn = dropdown.querySelector(".dropdown-btn");

  btn.addEventListener("click", () => {

    dropdowns.forEach((item) => {
      if(item !== dropdown){
        item.classList.remove("active");
      }
    });

    dropdown.classList.toggle("active");
  });
});


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});


// MOBILE DROPDOWNS

const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");

mobileDropdowns.forEach((dropdown) => {

  const btn = dropdown.querySelector(".mobile-dropdown-btn");

  btn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
});