const baseCards = [
    { name: 'bullbasaur', img: 'bullbasaur.png' },
    { name: 'charmander', img: 'charmander.png' },
    { name: 'eevee', img: 'eevee.png' },
    { name: 'pikachu', img: 'pikachu.png' },
    { name: 'psyduck', img: 'psyduck.png' },
    { name: 'squirtle', img: 'squirtle.png' }
];


const cardsArray = [
    ...baseCards, 
    ...baseCards
].sort(() => Math.random() - 0.5);
console.log(cardsArray);

// -- Модальне вікно --
const modal = document.getElementById('rules-modal');
const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');

rulesBtn.addEventListener('click', ()=>{
    modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', ()=>{
    modal.classList.add('hidden');
});

modal.addEventListener('click', (event)=>{
    if (event.target === modal) 
        modal.classList.add('hidden');
});

// -- Логіка гри --

const backImg = 'pokeball.jpg';
const winImg = 'pokecoin.jpg';

const grid = document.querySelector('#grid');
const stepsDisplay = document.querySelector('#steps');
const matchesDisplay = document.querySelector('matches');

let stepsCount = 0;
let matchesCount = 0;
let chosenCardsElements = [];
let isBoardLocked = false; 

function createBoard(){
    cardsArray.forEach((card, index) => {        
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', backImg);
        imgElement.setAttribute('data-id', index);
        imgElement.addEventListener('click', flipCard);
        
        grid.appendChild(imgElement);
    });
}

function flipCard(event){
    if (isBoardLocked) return; 

    const clickedCard = event.target;
    if (clickedCard === chosenCardsElements[0]) return;

    const cardId = clickedCard.getAttribute('data-id');
    clickedCard.setAttribute('src', cardsArray[cardId].img);

    chosenCardsElements.push(clickedCard);

    if (chosenCardsElements.length === 2) {
        stepsCount++;
        stepsDisplay.textContent = stepsCount;
        checkCards();
}

function checkCards(){
    isBoardLocked = true;

    const [cardOne, cardTwo] = chosenCardsElements;
    const idOne = cardOne.getAttribute('data-id');
    const idTwo = cardTwo.getAttribute('data-id');

    if (cardsArray[idOne].name === cardsArray[idTwo].name) {
        cardOne.setAttribute('src', winImg);
        cardTwo.setAttribute('src', winImg);

        cardOne.classList.add('matched');
        cardTwo.classList.add('matched');

        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);

        matchesCount++;
        matchesDisplay.textContent = matchesCount;

        chosenCardsElements = [];
        isBoardLocked = false;
}

    else {
        setTimeout(() => {
            cardOne.setAttribute('src', backImg);
            cardTwo.setAttribute('src', backImg);

            chosenCardsElements = [];
            isBoardLocked = false;
        }, 800);
    }
}

createBoard();