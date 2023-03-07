//burger

let burgerIcon = document.querySelector(".hamburger-lines");
let mobMenu = document.querySelector(".mobile-menu");
let bodyEl = document.body;

burgerIcon.addEventListener("click", () =>{
    burgerIcon.classList.toggle("active");
    mobMenu.classList.toggle("mobile-menu-active");
    bodyEl.classList.toggle("stop-scrolling");
    //add shadow
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('header-nav-item-link')) {
        burgerIcon.classList.toggle("active");
        mobMenu.classList.toggle("mobile-menu-active");
        bodyEl.classList.toggle("stop-scrolling");
    }
});
