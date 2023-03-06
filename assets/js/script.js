//burger

let hamMenu = document.querySelector(".hamburger-lines");
let mobMenu = document.querySelector(".mobile-menu");
hamMenu.addEventListener("click", () =>{
    hamMenu.classList.toggle("active");
    mobMenu.classList.toggle("mobile-menu-active");
});