document.addEventListener('DOMContentLoaded', () =>{
    const cardArray = [
        {
            name: 'hedi-canada',
            image: 'images/1.png'
        },
        {
            name: 'hedi-canada',
            image: 'images/1.png'
        },
        {
            name: 'hedi-balcony',
            image: 'images/2.png'
        },
        {
            name: 'hedi-balcony',
            image: 'images/2.png'
        },
        {
            name: 'hedi-sunset',
            image: 'images/3.png'
        },
        {
            name: 'hedi-sunset',
            image: 'images/3.png'
        },
        {
            name: 'hedi-helmet',
            image: 'images/4.png'
        },
        {
            name: 'hedi-helmet',
            image: 'images/4.png'
        },
        {
            name: 'hedi-colina',
            image: 'images/5.png'
        },
        {
            name: 'hedi-colina',
            image: 'images/5.png'
        },
        {
            name: 'hedi-enfants',
            image: 'images/6.png'
        },
        {
            name: 'hedi-enfants',
            image: 'images/6.png'
        },
        
    ]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        let card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);

    }
}

function checkForMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all';
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].image);
    if (cardsChosen.length==2){
        setTimeout(checkForMatch, 350);
    }
}


createBoard();
})

