/* Mobile menu */

const burgerIcon = document.querySelector(".hamburger-lines");
const mobMenu = document.querySelector(".mobile-menu");
const shadowEl = document.querySelector(".shadow");
const bodyEl = document.body;

function toggleMobMenu() {
    burgerIcon.classList.toggle("active");
    mobMenu.classList.toggle("mobile-menu-active");
    bodyEl.classList.toggle("stop-scrolling");
    shadowEl.classList.toggle("shadow-active")
}

burgerIcon.addEventListener("click", toggleMobMenu);

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('header-nav-item-link') || event.target.classList.contains('shadow')) {
        toggleMobMenu();
    }
});

//burger accessibility

const nav = document.querySelector(".mobile-menu-nav");
const menu = document.querySelector(".mobile-nav-links");

// Toggle menu open/closed.
const toggleMenu = (status) => {
    if (status === "false") {
        menu.classList.remove("hide");
        burgerIcon.setAttribute("aria-expanded", "true");
        burgerIcon.setAttribute("aria-label", "Close news menu.");
    } else {
        menu.classList.add("hide");
        burgerIcon.setAttribute("aria-expanded", "false");
        burgerIcon.setAttribute("aria-label", "Open news menu.");
    }
};

// Set initial state for the button.
burgerIcon.setAttribute("aria-expanded", "false");
burgerIcon.setAttribute("aria-label", "Open news menu.");

// Listen for button click
burgerIcon.addEventListener("click", function () {
    const status = burgerIcon.getAttribute("aria-expanded");
    toggleMenu(status);
});

// Close menu when user tabs outside the menu.
document.addEventListener("focusin", (e) => {
    if (e.target.closest("nav") !== nav) {
        toggleMenu(true);
    }
});

// Close menu when user clicks outside the menu.
document.addEventListener("click", (e) => {
    if (e.target.closest("nav") !== nav) {
        toggleMenu(true);
    }
});


/* Our pets carousel */

const petsCarouselBtnRight = document.querySelector(".arrow-right");
const petsCarouselBtnLeft = document.querySelector(".arrow-left");
const carouselList = document.querySelector(".carousel-list");

function moveRight() {
    carouselList.classList.add("transition-right");
    petsCarouselBtnRight.addEventListener("click", moveRight);
}

petsCarouselBtnRight.addEventListener("click", moveRight);

function moveLeft() {
    carouselList.classList.add("transition-left");
    petsCarouselBtnLeft.addEventListener("click", moveLeft);
}

petsCarouselBtnLeft.addEventListener("click", moveLeft);

carouselList.addEventListener("animationend", () => {
    carouselList.classList.remove("transition-left");
    carouselList.classList.remove("transition-right");
    // petsCarouselBtnLeft.removeEventListener("click", moveLeft);
    // petsCarouselBtnRight.removeEventListener("click", moveRight);

});

