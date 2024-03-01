score = 0;
cross = true;
let goaudio = new Audio('music.mp3')
let gameoveraudio = new Audio('gameover.mp3')

document.onkeydown = function(element) {
    if (element.keyCode=== 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animatedino");
        goaudio.play();
        setTimeout(() => {
            dino.classList.remove("animatedino");
            goaudio.pause();
        }, 1000);
    }
    if (element.keyCode=== 39) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 50 +'px';
    }
    if (element.keyCode=== 37) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox - 50 +'px';
    }
}
setInterval(() => {
    dino = document.querySelector(".dino");
    gamesover = document.querySelector(".gameover");
    dragon = document.querySelector(".dragon");
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
    ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('bottom'));
    offsetX = Math.abs(dx-ox)
    offsety = Math.abs(dy-oy)
    if (offsetX < 30 && offsety < 30) {
        dragon.classList.remove("animatedragon");
        gameover = document.querySelector('.gameover');
        gameover.style.display = 'block';
        Info.innerHTML = 'Reload to play again';
        gameoveraudio.play();
        setTimeout(() => {
            gameoveraudio.pause();
        }, 1000);
    }
    else if (offsetX < 30 && cross) {
        score+=10;
        updatescore(score)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            dragon = document.querySelector(".dragon");
            dur = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation'));
            newdur = dur - 0.1;
            dragon.style.animationDuration = newdur + 's';
            console.log('New animation duration: ' + newdur)
        }, 500);

    }
}, 10);
function updatescore(score) {
    scoreCont.innerHTML = 'Your Score is: ' + score;
}