console.log('hello world');
//game constant & variables
let gameBoard = document.getElementsByClassName('gameBoard')
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let lastPaintTime = 0;
let speed = 2;
score = 0;
let snakeArr = [
    { x: 10, y: 12 }
]
let food = { x: 8, y: 6 };

//game function
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    // gameEngine();
}


// function iscollide(arr) {
//     return false;

// }
// function gameEngine() {
//     //part 1: updating snake and food array
//     if (iscollide(snakeArr)) {
//         gameOverSound.play();
//         moveSound.pause();
//         alert('press any key to play again!');
//         let snakeArr = [{ x: 10, y: 12 }];
//         musicSound.play();
//         score = 0;

//     }
//     //if snake eaten the food increment the snake and regenerate the food
//     if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
//         snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y })
//         let a = 2;
//         let b = 36;
//         food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
//     }
//     //Moving the snake 
//     for (let i = snakeArr.length - 2; i <= 0; i--) {
//         snakeArr[i + 1] = { ...snakeArr[i] };
//     }
//     snakeArr[0].x = inputDir.x;
//     snakeArr[0].y = inputDir.y;
//     //part 1: display snake and food
//     //display snake
// }

gameBoard.innerHTML = '';
snakeArr.forEach((e, index) => {
    snakeElement = document.createElement('div');
    snakeElement.style.display = 'grid';
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index == 0) {
        snakeElement.classList.add('head');
    } else {
        snakeElement.classList.add('snake');
    }
    
    gameBoard.innerHTML = snakeElement;

})
//display snake
let foodElement = document.createElement('div');
foodElement.style.display = 'grid';
foodElement.style.gridRowStart = food.y;
foodElement.style.gridColumnStart = food.x;
foodElement.classList.add('food');
gameBoard.innerHTML = foodElement;


//main lagic of game
window.requestAnimationFrame(main)
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } //start the game

    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("arrow up");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("arrow Down");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("arrow Left");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("arrow Right");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
})
