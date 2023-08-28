import { generateRandomNum, renderCard, petsArray } from './petsgeneration.js'

//pagination

const paginGroup = document.querySelector(".btn-pagination-group");
const skipRightBtn = document.querySelector("#skip-right");
const skipRightTurboBtn = document.querySelector("#skip-right-turbo");
const skipLeftBtn = document.querySelector("#skip-left");
const skipLeftTurboBtn = document.querySelector("#skip-left-turbo");
const pageCountBtn = document.querySelector("#page-count");

let cardsCount = 48;
let startPos = 0;
let endPos = startPos+8;
let pageNum = 1;

function enableBtns(skipBtn, turboBtn) {
    skipBtn.classList.add("pagination-btn-enabled");
    skipBtn.classList.remove("pagination-btn-disabled");
    turboBtn.classList.add("pagination-btn-enabled");
    turboBtn.classList.remove("pagination-btn-disabled");
}

function disableBtns(skipBtn, turboBtn) {
    skipBtn.classList.remove("pagination-btn-enabled");
    skipBtn.classList.add("pagination-btn-disabled");
    turboBtn.classList.remove("pagination-btn-enabled");
    turboBtn.classList.add("pagination-btn-disabled");
}

function showPets(startPosition, endPosition){
    const petsList = document.querySelectorAll(".carousel-card");
    petsList.forEach((item, index) => {
        item.classList.add('display-none');
        if(index >= startPosition && index < endPosition){
            item.classList.remove('display-none');
        }
    });
}

function updatePets() {
    let renderingOptions = getRenderingOptions();
    let cardsPerPage = renderingOptions.cardsPerPage;

    pageNum = pageCountBtn.innerHTML;
    startPos = (pageNum-1) * cardsPerPage;
    endPos = pageNum * cardsPerPage;
    showPets(startPos, endPos);
}

function getRenderingOptions() {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
        let renderingOptions = {cardsPerPage: 8};
        renderingOptions.pages = cardsCount/renderingOptions.cardsPerPage;
        return renderingOptions
    } else if (screenWidth >= 768) {
        let renderingOptions = {cardsPerPage: 6};
        renderingOptions.pages = cardsCount/renderingOptions.cardsPerPage;
        return renderingOptions
    } else {
        let renderingOptions = {cardsPerPage: 3};
        renderingOptions.pages = cardsCount/renderingOptions.cardsPerPage;
        return renderingOptions
    }
};

paginGroup.addEventListener("click", (ev) => {
    let renderingOptions = getRenderingOptions();
    let pages = renderingOptions.pages;

    if(ev.target.id === "skip-right"){
        enableBtns(skipLeftBtn, skipLeftTurboBtn);
        if (pageCountBtn.innerHTML <= pages-1){
            pageCountBtn.innerHTML++;
            updatePets();
        }
    }

    if(ev.target.id === "skip-left"){
        enableBtns(skipRightBtn, skipRightTurboBtn);
        if (pageCountBtn.innerHTML >= 2){
            pageCountBtn.innerHTML--;
            updatePets();
        }
    }

    if(ev.target.id === "skip-right-turbo"){
        enableBtns(skipLeftBtn, skipLeftTurboBtn);
        disableBtns(skipRightBtn, skipRightTurboBtn);
        pageCountBtn.innerHTML = pages;
        updatePets();
    }

    if(ev.target.id === "skip-left-turbo"){
        enableBtns(skipRightBtn, skipRightTurboBtn);
        disableBtns(skipLeftBtn, skipLeftTurboBtn);
        pageCountBtn.innerHTML = 1;
        updatePets();
    }

    if (pageCountBtn.innerHTML === "1"){
        disableBtns(skipLeftBtn, skipLeftTurboBtn);
        updatePets();
    }

    if (pageCountBtn.innerHTML === pages) {
        disableBtns(skipRightBtn, skipRightTurboBtn);
        updatePets();
    }
});

//cards rendering

function generatePetPaginationArrays(petArray, length) {
    let resultArr = [];
    for (let i=0; i<length; i++){
        const randomNumArr = generateRandomNum(length, length);
        resultArr = randomNumArr.map(index => petArray[index]);
    }
    return resultArr;
}


function joinPetPaginationArrays(petsPerPage, pages) {
    let metaPetArr = [];
    for (let i=0; i<pages; i++) {
        const arr = generatePetPaginationArrays(petsArray, petsPerPage);
        metaPetArr.push(...arr);
    }
    return metaPetArr;
}

function renderPetPaginationArray() {
    let renderingOptions = getRenderingOptions();
    let cardsPerPage = renderingOptions.cardsPerPage;
    let pages = renderingOptions.pages;
    const carouselList = document.querySelector(".carousel-list");
    const metaArr = joinPetPaginationArrays(cardsPerPage, pages);
    renderCard(metaArr, "carousel-cards-pagination", carouselList);
}

renderPetPaginationArray();








