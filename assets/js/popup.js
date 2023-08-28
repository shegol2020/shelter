import {petsArray} from "./petsgeneration.js";

const popupCloseBtn = document.querySelector(".pop-up-close");
const popupContent = document.querySelector(".pop-up-content");
const popupShadow = document.querySelector(".pop-up");

popupCloseBtn.addEventListener('click', () => {
    popupContent.classList.add('hidden');
    popupShadow.classList.add('hidden');
    document.body.classList.remove('stop-scrolling');
});

const popUpElement = document.querySelector(".pop-up");

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('carousel-card-btn')) {
        popUpElement.classList.remove('hidden');
        popUpRender(event);
    }
});

function popUpRender(event) {
    let petNum = event.target.parentElement.dataset.id;
    console.log(petsArray);
    const popUpCard = document.querySelector('.pop-up-content');

    popUpCard.innerHTML =  `<button class="pop-up-close">X</button>
<div class="pop-up-card">
    <div class="pop-up-img-wrap">
        <img src=${petsArray[petNum].img} alt="" class="pop-up-img"></div>
        <div class="pop-up-info">
            <div class="pop-up-header">
                <h2 class="pop-up-title heading-medium">${petsArray[petNum].name}</h2>
                <h3 class="pop-up-subtitle heading-small">${petsArray[petNum].type} - ${petsArray[petNum].breed}</h3></div>
                <p class="pop-up-main-info heading-extra-small">${petsArray[petNum].description}</p>
                <ul class="pop-up-list">
                    <li class="pop-up-list-item">Age: ${petsArray[petNum].age}</li>
                    <li class="pop-up-list-item">Inoculations: ${petsArray[petNum].inoculations}</li>
                    <li class="pop-up-list-item">Diseases: ${petsArray[petNum].diseases}</li>
                    <li class="pop-up-list-item">Parasites: ${petsArray[petNum].parasites}</li>
                </ul>
            </div>
        </div>
      </div>
 </div>`

    const popUpCloseBtn = document.querySelector('.pop-up-close');

    popUpCloseBtn.addEventListener('click', () => {
        popUpElement.classList.add('hidden');
        document.body.classList.remove('stop-scrolling');

    });

    document.body.classList.add('stop-scrolling');

}