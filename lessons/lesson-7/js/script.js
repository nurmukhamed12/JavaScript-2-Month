const startElement = document.getElementById("start");
const gameElement = document.getElementById("game");
const timeElement = document.getElementById("time");
const timeHeaderElement = document.getElementById("time-header");
const resultHeaderElement = document.getElementById("result-header");
const gameTimeElement = document.getElementById("game-time");
const resultElement = document.getElementById("result");
let score = 0;

startElement.addEventListener("click", startGame);
gameElement.addEventListener("click", handleBox);
gameTimeElement.addEventListener("input", setGameTime);

function timeListener() {
    gameTime = parseFloat(timeElement.innerText);

    if (gameTime <= 0) {
        clearInterval(interval);
        endGame();
    }else{
        timeElement.innerText = (gameTime - 0.1).toFixed(1);
    };
}

function startGame() {
    score = 0;
    startElement.classList.toggle("hide");
    gameElement.style.background = "green";
    gameTimeElement.setAttribute("disabled", true);
    let gameTime = 0;
    let interval = setInterval(timeListener,100);
    renderBox();
};

function endGame() {
    startElement.classList.toggle("hide");
    gameElement.style.background = "#ccc";
    gameTimeElement.removeAttribute("disabled");
    gameElement.innerText = "";
    resultElement.innerText = score;
    resultHeaderElement.classList.toggle("hide");
    timeHeaderElement.classList.toggle("hide");
};

function renderBox() {
    gameElement.innerHTML = "";
    gameElement.style.background = "#" + getRandom(0, 255) + getRandom(0, 255) + getRandom(0, 255);
    let box = document.createElement("div");
    let boxSize = getRandom(30, 200);
    let gameZone = gameElement.getBoundingClientRect();

    let maxLeft = gameZone.width - boxSize;
    let maxTop = gameZone.height - boxSize;

    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.background = "#000";
    box.style.cursor = "pointer";
    box.style.position = "absolute";
    box.style.left = getRandom(0, maxLeft) + "px";
    box.style.top = getRandom(0, maxTop) + "px";

    let randomShape = getRandom(1, 3);
    if (randomShape == 1) {
        box.style.borderRadius = "";
    } else if (randomShape == 2) {
        box.style.borderRadius = "50%";
    } else if (randomShape == 3) {
        box.style.clipPath = "polygon(0 0, 100% 0, 100% 50%, 0 50%)";
    } else {
        box.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
    }

    box.id = "check";
    gameElement.appendChild(box);
};

function handleBox(event) {
    if (event.target.id === "check") {
        console.log("click");
        score++
        renderBox();
    };
    
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function setGameTime() {
    let timeGame = +gameTimeElement.value;
    timeElement.innerText = timeGame.toFixed(1);

    resultHeaderElement.classList.add("hide");
    timeHeaderElement.classList.remove("hide");
};   