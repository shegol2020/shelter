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


//import { generatePetCards, generateRandomNum, renderCard } from './petsgeneration.js'

function generatePetPaginationArray(petArray, length, cardsOnPage) {
    const randomNumArr = generateRandomNum(cardsOnPage, cardsOnPage);
    const randomArr = randomNumArr.map(index => petArray[index]);
    let resultArr = [];
    let iterations = length/cardsOnPage;
    for (let i=0; i<iterations+1; i++){
        resultArr.push(randomArr);
    }
    return resultArr;
}

let testArr = generatePetPaginationArray(petsArray, 8, 8);

const carouselWrapEl = document.querySelector(".carousel-wrap");

renderCard(petsArray, "carousel-cards-pets", carouselWrapEl);

