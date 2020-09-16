let userBtns = document.querySelectorAll(".btn-user");
let compBtns = document.querySelectorAll(".btn-com");
let resetBtn = document.querySelector(".reset-btn");
let result = document.querySelector(".result");
let userWinCount = document.querySelector(".user-win-count");
let comWinCount = document.querySelector(".com-win-count");
let userBtnContainer = document.querySelector(".user-btns");
let actionArray = ["rock", "paper", "scissor", "lizard", "spock"];

function colorAll(arr, color) {
    arr.forEach(e => {
        e.style.color = color;
    })
}

function clicked (e) {
    let random = Math.trunc(Math.random() * 5);
    let randomAction = document.querySelector(`.${actionArray[random]}-com`);

    colorAll([...userBtns], "#f7f4f4");
    colorAll([...compBtns], "#8dc7e9");


    e.target.style.color = "#000000";
    randomAction.style.color = "#000000";

    let action = e.target.classList[e.target.classList.length - 1];

    document.querySelector(".user-action").innerText = `${action.toUpperCase()}`;
    document.querySelector(".com-action").innerText = `${actionArray[random].toUpperCase()}`;

    if (e.target.classList.contains("rock")) {
        if (action == actionArray[random]){
            result.innerText = "It's a tie.";
        } else if (actionArray[random] == "lizard" 
        || actionArray[random] == "scissor") {
            result.innerText = "You Won!";
            userWinCount.innerText =  +userWinCount.innerText + 1;
        } else {
            result.innerText = "You Lost!";
            comWinCount.innerText =  +comWinCount.innerText + 1;
        }
    }

    if (e.target.classList.contains("paper")) {
        if ("paper" == actionArray[random]){
            result.innerText = "It's a tie.";
        } else if (actionArray[random] == "rock" 
        || actionArray[random] == "spock") {
            result.innerText = "You Won!";
            userWinCount.innerText =  +userWinCount.innerText + 1;
        } else {
            result.innerText = "You Lost!";
            comWinCount.innerText =  +comWinCount.innerText + 1;
        }
    }

    if (e.target.classList.contains("scissor")) {
        if ("scissor" == actionArray[random]){
            result.innerText = "It's a tie.";
        } else if (actionArray[random] == "paper" 
        || actionArray[random] == "lizard") {
            result.innerText = "You Won!";
            userWinCount.innerText =  +userWinCount.innerText + 1;
        } else {
            result.innerText = "You Lost!";
            comWinCount.innerText =  +comWinCount.innerText + 1;
        }
    }

    if (e.target.classList.contains("lizard")) {
        if ("lizard" == actionArray[random]){
            result.innerText = "It's a tie.";
        } else if (actionArray[random] == "paper" 
        || actionArray[random] == "spock") {
            result.innerText = "You Won!";
            userWinCount.innerText =  +userWinCount.innerText + 1;
        } else {
            result.innerText = "You Lost!";
            comWinCount.innerText =  +comWinCount.innerText + 1;
        }
    }

    if (e.target.classList.contains("spock")) {
        if ("spock" == actionArray[random]){
            result.innerText = "It's a tie.";
        } else if (actionArray[random] == "scissor" 
        || actionArray[random] == "rock") {
            result.innerText = "You Won!";
            userWinCount.innerText =  +userWinCount.innerText + 1;
        } else {
            result.innerText = "You Lost!";
            comWinCount.innerText =  +comWinCount.innerText + 1;
        }
    }
}


function reset() {
    document.querySelector(".user-action").innerText = ``;
    document.querySelector(".com-action").innerText = ``;
    colorAll([...userBtns], "#f7f4f4");
    colorAll([...compBtns], "#8dc7e9");
    userWinCount.innerText =  0;
    comWinCount.innerText =  0;
    result.innerText = "";
}

userBtnContainer.addEventListener("click", function (event) {
    return clicked(event);
});

resetBtn.addEventListener("click", reset);