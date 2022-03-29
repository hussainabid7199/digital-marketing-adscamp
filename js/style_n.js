
    const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const search = document.querySelector(".search");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    search.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    search.classList.toggle("active");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


