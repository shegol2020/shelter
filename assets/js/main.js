import { generatePetCards } from './petsgeneration.js'

/* Our pets carousel */

    const petsCarouselBtnRight = document.querySelector(".arrow-right");
    const petsCarouselBtnLeft = document.querySelector(".arrow-left");
    const carouselList = document.querySelector(".carousel-list");

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

       document.addEventListener("DOMContentLoaded", (event) => {

        let cardsLeft = document.querySelector(".cards-left");
        let cardsCenter = document.querySelector(".cards-center");
        let cardsRight = document.querySelector(".cards-right");

        function moveRight() {
            carouselList.classList.add("transition-right");
            petsCarouselBtnRight.removeEventListener("click", moveRight);
        }

        petsCarouselBtnRight.addEventListener("click", moveRight);

        function moveLeft() {
            carouselList.classList.add("transition-left");
            petsCarouselBtnLeft.removeEventListener("click", moveLeft);
        }

        petsCarouselBtnLeft.addEventListener("click", moveLeft);

        let count = 0;

        carouselList.addEventListener("animationend", (animationEvent) => {
            let changedItem;
            if (animationEvent.animationName === "move-right"){
                if (count > 1) {
                    removeAllChildNodes(carouselList);
                    generatePetCards(3);
                    count = 0;
                }
                changedItem = cardsCenter.cloneNode(true);
                cardsCenter.innerHTML = cardsLeft.innerHTML;
                cardsLeft.innerHTML = changedItem.innerHTML;
                count++;

                console.log(count);


            }
            if (animationEvent.animationName === "move-left"){
                if (count < -1) {
                    removeAllChildNodes(carouselList);
                    generatePetCards(3);
                    count = 0;
                }
                changedItem = cardsCenter.cloneNode(true);
                cardsCenter.innerHTML = cardsRight.innerHTML;
                cardsRight.innerHTML = changedItem.innerHTML;
                count--;


                console.log(count);
            }


            carouselList.classList.remove("transition-left");
            carouselList.classList.remove("transition-right");

            petsCarouselBtnRight.addEventListener("click", moveRight);
            petsCarouselBtnLeft.addEventListener("click", moveLeft);



        });

    });





    generatePetCards(3); //desktop




