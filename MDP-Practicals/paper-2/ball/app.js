const main = document.querySelector(".main");
const ball = document.querySelector(".ball");
const bounceInput = document.getElementById("bounceInput");
const startButton = document.getElementById("startButton");

let velocity = 9;
let remainingBounces = 0;

function startBouncing() {
    remainingBounces = parseInt(bounceInput.value) || 0;
    remainingBounces *= 2;
    moveBall();
}

function moveBall() {
    let balltop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));

    if (remainingBounces > 0) {
        if (balltop <= 0 && velocity < 0) {
            velocity = Math.abs(velocity); 
            remainingBounces--;

            if (remainingBounces > 0) {
                requestAnimationFrame(moveBall);
            } else {
             
                moveBallDown();
            }
        } else if (balltop >= main.clientHeight - ball.clientHeight && velocity > 0) {
            velocity = -Math.abs(velocity); 
            remainingBounces--;

            if (remainingBounces > 0) {
                requestAnimationFrame(moveBall);
            } else {
                
                moveBallDown();
            }
        } else {
            ball.style.top = balltop + velocity + "px";
            requestAnimationFrame(moveBall);
        }
    }
}

function moveBallDown() {
    let balltop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    if (balltop < main.clientHeight - ball.clientHeight) {
        ball.style.top = balltop + velocity + "px";
        requestAnimationFrame(moveBallDown);
    }
}

bounceInput.addEventListener('input', function () {
    remainingBounces = parseInt(bounceInput.value) || 0;
});

startButton.addEventListener('click', function () {
    startBouncing();
});

document.addEventListener('DOMContentLoaded', function () {
  
    ball.style.top = main.clientHeight - ball.clientHeight + "px";
});
