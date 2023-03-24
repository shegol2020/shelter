import { generateRandomNum, renderCard, petsArray } from './petsgeneration.js'


//pop-up

const popupCloseBtn = document.querySelector(".pop-up-close");
const popupContent = document.querySelector(".pop-up-content");
const popupShadow = document.querySelector(".pop-up");

popupCloseBtn.addEventListener('click', () => {
    popupContent.classList.add('hidden');
    popupShadow.classList.add('hidden');
    document.body.classList.remove('stop-scrolling');
});

//pagination

const paginGroup = document.querySelector(".btn-pagination-group");
const skipRightBtn = document.querySelector("#skip-right");
const skipRightTurboBtn = document.querySelector("#skip-right-turbo");
const skipLeftBtn = document.querySelector("#skip-left");
const skipLeftTurboBtn = document.querySelector("#skip-left-turbo");
const pageCountBtn = document.querySelector("#page-count");

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

paginGroup.addEventListener("click", (ev) => {
    if(ev.target.id === "skip-right"){
        enableBtns(skipLeftBtn, skipLeftTurboBtn);
        if (pageCountBtn.innerHTML <= 15){
            pageCountBtn.innerHTML++;
        }
    }

    if(ev.target.id === "skip-left"){
        enableBtns(skipRightBtn, skipRightTurboBtn);
        if (pageCountBtn.innerHTML >= 2){
            pageCountBtn.innerHTML--;
        }
    }

    if(ev.target.id === "skip-right-turbo"){
        enableBtns(skipLeftBtn, skipLeftTurboBtn);
        disableBtns(skipRightBtn, skipRightTurboBtn)
        pageCountBtn.innerHTML = 16;
    }

    if(ev.target.id === "skip-left-turbo"){
        enableBtns(skipRightBtn, skipRightTurboBtn);
        disableBtns(skipLeftBtn, skipLeftTurboBtn)
        pageCountBtn.innerHTML = 1;
    }

    if (pageCountBtn.innerHTML == 1){
        disableBtns(skipLeftBtn, skipLeftTurboBtn);
    }

    if (pageCountBtn.innerHTML == 16) {
        disableBtns(skipRightBtn, skipRightTurboBtn)
    }
});


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
        metaPetArr.push(arr);
    }
    return metaPetArr;
}

function renderPetPaginationArray(petsPerPage, pages) {

    const carouselList = document.querySelector(".carousel-list");
    const metaArr = joinPetPaginationArrays(petsPerPage, pages);
    metaArr.forEach(arr => {
        renderCard(arr, "carousel-cards-pagination", carouselList);
    })
}


renderPetPaginationArray(6, 8);



