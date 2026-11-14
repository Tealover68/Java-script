const grid = document.querySelector('.grid');
const resultsDisplay = document.querySelector('.results');

const width = 15;
const totalSquares = width * width;
const squares = [];
const bombsRemoved = [];
const bomb = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

let shoterIndex = 217;
let directionRight = true;
let xStep = 1;
let timerId;


function createBoard() {
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);
    }
}
console.log(squares);
function drawBombs() {
    bombs.forEach((bombIndex, i)=>{
        squares[bombIndex].classList.add('bomb')
    })
}

function moveShooter(event){

}
function shoot (event){

}
function moveBombs() {
    
}


createBoard();
drawBombs();
squares[shoterIndex].classList.add('shooter');

document.addEventListener("keydown", moveShooter);
document.addEventListener("keydown", shoot);
timerId = setInterval(moveBombs, 500);
