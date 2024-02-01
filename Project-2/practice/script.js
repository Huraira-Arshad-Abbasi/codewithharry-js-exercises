console.log("welcome to Tic Tac Teo");
let music = new Audio("music.mp3");
let Tunmusic = new Audio("ting.mp3");
let gameoveraudio = new Audio("gameover.mp3");
let Turn = "X";
let gameover = false;

// function to change turn
const changeTurn = () => {
    return Turn === "X" ? "0" : "X";
}
// function to check win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 3, 5, 0],
        [3, 4, 5, 3, 15, 0],
        [6, 7, 8, 3, 25, 0],
        [0, 3, 6, -7.5, 15, 90],
        [1, 4, 7, 2.5, 15, 90],
        [2, 5, 8, 12.5, 15, 90],
        [0, 4, 8, 2.5, 15, 45],
        [2, 4, 6, 2.5, 15, -45],
    ]
    wins.forEach((e) => {
        if (boxtexts[e[0]].innerText == boxtexts[e[1]].innerText && boxtexts[e[1]].innerText == boxtexts[e[2]].innerText && boxtexts[e[0]].innerText !== ("")) {
            document.getElementsByClassName('Turn')[0].innerText = boxtexts[e[0]].innerText + "  won";
            music.pause();
            gameoveraudio.play();
            gameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "250px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "25vw";
            setTimeout(() => {
                document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
            }, 3000);
        }
    })
}
// Game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = Turn;
            Turn = changeTurn();
            music.play();
            Tunmusic.play();
            checkWin();
            if (gameover == false) {
                document.getElementsByClassName('Turn')[0].innerText = "Turn for " + Turn;
            }
        }
    })
})
// reset 
reset.addEventListener('click', () => {
    let boxtxt = document.querySelectorAll(".boxtext");
    Array.from(boxtxt).forEach(element => {
        element.innerText = "";
        Turn = "X";
        gameover = false;
        document.getElementsByClassName('Turn')[0].innerText = "Turn for " + Turn;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
        music.pause();
        document.querySelector(".line").style.width = "0vw";
    })

})
