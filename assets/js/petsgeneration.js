//Pets generation

export const petsArray = [
    {
        "id": 0,
        "name": "Jennifer",
        "img": "../../assets/img/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 1,
        "name": "Sophia",
        "img": "../../assets/img/pets-sofia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 2,
        "name": "Woody",
        "img": "../../assets/img/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": 3,
        "name": "Scarlett",
        "img": "../../assets/img/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 4,
        "name": "Katrine",
        "img": "../../assets/img/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 5,
        "name": "Timmy",
        "img": "../../assets/img/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": 6,
        "name": "Freddie",
        "img": "../../assets/img/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 7,
        "name": "Charlie",
        "img": "../../assets/img/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charlie, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];


export const generateRandomNum = (count, max) => {
    let newArr = [];
    while (newArr.length !== count) {
        const randomNum = Math.floor(Math.random() * max);
        if (!newArr.includes(randomNum)) {
            newArr.push(randomNum);
        }
    }
    return newArr;
};

function getCardsArray(cardsArr, currentCard, length) {
    const curCardId = currentCard.map(card => card.id);
    const cleanedArr = cardsArr.filter(el => !curCardId.includes(el.id));
    const randomNumArr = generateRandomNum(length, cleanedArr.length - 1);
    const resultArr = randomNumArr.map(index => cleanedArr[index]);
    return resultArr;
}

const carouselList = document.querySelector(".carousel-list");

export function renderCard(array, classString, container) {
    const petsCardList = document.createElement("ul");
    petsCardList.classList.add("carousel-cards", classString);
    container.append(petsCardList);

    array.forEach(petCard => {
        const petsCard = document.createElement("li");
        petsCard.classList.add("carousel-card");
        petsCard.setAttribute("data-id", petCard.id)
        petsCard.innerHTML = `
                                <img src=${petCard.img} alt="${petCard.breed}" class="carousel-card-pic">
                                <h4 class="carousel-card-heading heading-small">${petCard.name}</h4>
                                <button class="btn btn-accent carousel-card-btn">Learn more</button>
                            `;
        petsCardList.append(petsCard);
    })
}


export function generatePetCards(length) {
    const leftCards = getCardsArray(petsArray, [], length);
    renderCard(leftCards, "cards-left", carouselList);
    const centerCards = getCardsArray(petsArray, leftCards, length);
    renderCard(centerCards, "cards-center", carouselList);
    const rightCards = getCardsArray(petsArray, centerCards, length);
    renderCard(rightCards, "cards-right", carouselList);

}


