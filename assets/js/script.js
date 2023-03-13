//Mobile menu

let burgerIcon = document.querySelector(".hamburger-lines");
let mobMenu = document.querySelector(".mobile-menu");
let shadowEl = document.querySelector(".shadow");
let bodyEl = document.body;

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

//pop-up

const popupCloseBtn = document.querySelector(".pop-up-close");
const popupContent = document.querySelector(".pop-up-content");
const popupShadow = document.querySelector(".pop-up");

popupCloseBtn.addEventListener('click', () => {
    popupContent.classList.add('hidden');
    popupShadow.classList.add('hidden');
    document.body.classList.remove('stop-scrolling');
});


