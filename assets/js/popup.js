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
    console.log(petsArray);
    const popUpCard = document.querySelector('.pop-up-content');

    petsArray[petNum].id;

    popUpCard.innerHTML =  `<button class="pop-up-close">X</button>
        <img src="../../assets/img/jennifer.png" alt="" class="pop-up-img">
        <div class="pop-up-info">
            <h2 class="pop-up-title">${petsArray[petNum].name}</h2>
            <h3 class="pop-up-subtitle">Dog - Labrador</h3>
            <p class="pop-up-main-info">Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.</p>
            <ul class="pop-up-list">
                <li class="pop-up-list-item">Age: 2 months</li>
                <li class="pop-up-list-item">Age: 2 months</li>
                <li class="pop-up-list-item">Age: 2 months</li>
                <li class="pop-up-list-item">Age: 2 months</li>
            </ul>
        </div>`











    // const popUpCloseBtn = document.querySelector('.pop-up-close');
    //
    // popUpCloseBtn.addEventListener('click', () => {
    //     popUpElement.classList.add('hidden');
    //     document.body.classList.remove('stop-scrolling');

    // });

    // document.body.classList.add('stop-scrolling');

}