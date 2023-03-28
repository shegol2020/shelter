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
        <img src="../../assets/img/jennifer.png" alt="" class="pop-up-img"></div>
        <div class="pop-up-info">
            <div class="pop-up-header">
                <h2 class="pop-up-title heading-medium">${petsArray[petNum].name}</h2>
                <h3 class="pop-up-subtitle heading-small">Dog - Labrador</h3></div>
                <p class="pop-up-main-info heading-extra-small">Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.</p>
                <ul class="pop-up-list">
                    <li class="pop-up-list-item">Age: 2 months</li>
                    <li class="pop-up-list-item">Age: 2 months</li>
                    <li class="pop-up-list-item">Age: 2 months</li>
                    <li class="pop-up-list-item">Age: 2 months</li>
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