import {petsArray} from "./petsgeneration.js";

const popUpElement = document.querySelector(".pop-up");

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('carousel-card-btn')) {
        popUpElement.classList.remove('hidden');
        popUpRender(event);
    }
});

function popUpRender(event) {
    let petNum = event.target.parentElement.dataset.id;
    const popUpCard = document.querySelector('.pop-up-content');

    popUpCard.innerHTML =  petsArray[petNum];

    // const popUpCloseBtn = document.querySelector('.pop-up-close');
    //
    // popUpCloseBtn.addEventListener('click', () => {
    //     popUpElement.classList.add('hidden');
    //     document.body.classList.remove('stop-scrolling');

    // });

    // document.body.classList.add('stop-scrolling');

}