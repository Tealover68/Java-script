const grid = document.getElementById('grid');
const resultDisplay = document.getElementById('result');

const width = 15;
const totalSquares = width * width;
const squares = [];
const bombsRemoved = [];
const bombs = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15,	16,	17,	18,	19,	20,	21,	22,	23,	24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

let shooterIndex = 217;
let directionRight = true;
let xStep = 1;
let timerId;

function createBoard(){
    for (let i=0; i< totalSquares; i++){
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);
    }
}
console.log(squares);

function drawBombs() {
    bombs.forEach((bombIndex, i)=>{
        if(!bombsRemoved.includes(i)){
            squares[bombIndex].classList.add('bomb');
        }
    });
}

function moveShooter(event){
    squares[shooterIndex].classList.remove('shooter');

    console.log(event);
    if (event.code === 'ArrowLeft' && shooterIndex % width !== 0) {
        shooterIndex--;
    }   
    else if (event.code === 'ArrowRight' && shooterIndex % width < width - 1) {
        shooterIndex++;
    }



    squares[shooterIndex].classList.add('shooter');

}
function shoot(event){
    console.log(event);
    if (event.code === 'Space') return;

    let shotTimerId;
    let shotIndex = shooterIndex;

    shotTimerId = setInterval(()=>{
        if(currentShotIndex >= 0){
            squares[currentShotIndex].classList.remove('shoot');
        }

        currentShotIndex -= width;

        if(currentShotIndex < 0){
            clearInterval(shotTimerId);
            return;
        }

        if(squares[currentShotIndex].classList.contains('bomb')){
            squares[currentShotIndex].classList.remove('bomb');
            squares[currentShotIndex].classList.add('boom');
            setTimeout(()=>squares[currentShotIndex].classList.remove('boom'), 300);

            clearInterval(shotTimerId);

            const bombIndex = bombs.indexOf(currentShotIndex);
            bombsRemoved.push(bombIndex);
            resultDisplay.textContent = bombsRemoved.length;
        }

            else {
                squares[currentShotIndex].classList.add('shoot');
            }
        }
    }
}
function removeBombs(){
    bombs.forEach((bombIndex, i)=>{
        squares[bombIndex].classList.remove('bomb');
    });
}
function moveBombs(){    
    
    //1 очистити екран
    removeBombs();

    //2 розрахувати положення
    // const bombs = [
    //     0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    //     15,	16,	17,	18,	19,	20,	21,	22,	23,	24,
    //     30, 31, 32, 33, 34, 35, 36, 37, 38, 39
    // ];

    let yStep = 0;
    const rightEdge = bombs[bombs.length - 1] % width === width - 1;
    const leftEdge = bombs[0] % width === 0;

    if (directionRight && rightEdge) {
        directionRight = false;
        xStep = -1;
        yStep = width;
    } 
    
    else if (!directionRight && leftEdge) {
        directionRight = true;
        xStep = 1;
        yStep = width;
    }

    for(let i=0; i<bombs.length; i++){
        if (yStep > 0) {
            bombs[i] += yStep;
        }
        else {
            bombs[i] += xStep;
        }
    }


    //3 намалюємо бомби
    drawBombs();

    //4
    
}



createBoard();
drawBombs();
squares[shooterIndex].classList.add('shooter');

document.addEventListener("keydown", moveShooter);
document.addEventListener("keydown", shoot);
timerId = setInterval(moveBombs, 500);
