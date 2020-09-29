let container = document.querySelector(".container");
let counter = 0;
let selectedElement = [];

let iconArray = [
    "fa-drum-steelpan", 
    "fa-headphones-alt", 
    "fa-microphone-alt", 
    "fa-guitar", 
    "fa-file-audio", 
    "fa-record-vinyl", 
    "fa-play", 
    "fa-music"
];

function createUI() {
    let indexArray = [];
    while (indexArray.length < 8) {
        let randomIndex = Math.floor(Math.random() * 8);
        if (!indexArray.includes(randomIndex)) indexArray.push(randomIndex);
    }
    indexArray.forEach(e => {
        let box = document.createElement("div");
        box.classList.add("box");
        let i = document.createElement("i");
        i.classList.add("fas", `${iconArray[e]}`);
        box.setAttribute("data-type", `${iconArray[e]}`);
        box.append(i);
        container.append(box);

        container.addEventListener("click", flip);
    });
}

createUI();
createUI();


function flip(event) {
        if(event.target.tagName == "I" && !event.target.parentElement.classList.contains("box-flip")) {
            counter = counter + 1;
            event.target.parentElement.classList.add("box-flip");
            selectedElement.push(event.target.parentElement.dataset.type);
        } else if (event.target.classList.contains("box") && !event.target.classList.contains("box-flip")) {
            counter = counter + 1;
            event.target.classList.add("box-flip");
            selectedElement.push(event.target.dataset.type);
        }
    disabled();
    match();
}

function disabled() {
    if(counter >= 2) {
        [...container.querySelectorAll(".box")].forEach(e =>
             e.classList.add("disabled"));
        counter = 0;
    }
}

function match() {
    if (selectedElement[0] == selectedElement[1] && selectedElement.length == 2) {
        [...container.querySelectorAll(".box-flip")].forEach(e => e.classList.add("matched"));

        [...container.querySelectorAll(".box")].forEach(e => {
            if (!e.classList.contains("matched")) e.classList.remove("disabled");
        });
        selectedElement = [];
        showMoves();
    } else if (selectedElement.length == 2) {
        [...container.querySelectorAll(".box-flip")].forEach(e => {
            if (!e.classList.contains("matched")) e.classList.add("unmatched")
        });

        setTimeout(() => {
            [...container.querySelectorAll(".box")].forEach(e =>{
                if (!e.classList.contains("matched")) e.classList.remove("disabled", "box-flip", "unmatched");
            });
        }, 2000);
        selectedElement = [];
        showMoves();
    }
}

function showMoves() {
    let moves = document.querySelector(".moves").innerText;
    moves = +moves + 1;
    document.querySelector(".moves").innerText = `${moves}`;
    if(moves == 1) time();
    stars(moves);
}

function time() {
    let second = -1;
    let minute = 0;
    setInterval(() => {
    second = second + 1;
    finalSecond = parseInt((second + 1) % 60);
    minute = Math.trunc(second / 60);
    document.querySelector(".minute").innerText = `${minute}`;
    document.querySelector(".second").innerText = `${finalSecond}`;
    }, 1000);
}

function stars(moves) {
    if (moves == 9) document.querySelector(".stars").lastElementChild.style.display = "none";
    if (moves == 14) document.querySelector(".stars").children[1].style.display = "none";
}

function reset() {
    [...container.querySelectorAll(".box")].forEach(e =>e.classList.remove("disabled", "box-flip", "matched"));
    document.querySelector(".moves").innerText = "0";
    // document.querySelector(".minute").innerText = "0";
    // document.querySelector(".second").innerText = "0";
    [...document.querySelector(".stars").children].forEach(e => e.style.display = "inline-block");
}

function modalUI() {
    let modalContainer = document.createElement("section");
    modalContainer.classList.add("modal-container", "flex");
    let modal = document.createElement("div");
    modalContainer.append(modal);
    modal.classList.add("modal");
    modal.innerText = "Congratulation🎁";
    let div = document.createElement("div");
    div.classList.add("flex");
    let h1 = document.createElement("h1");
    let i = document.createElement("i");
    i.classList.add("dcds");
    div.append(h1, i);
    modal.append(div);
    let textArr = [
        "You won this game🎉",
        `You made ${document.querySelector(".moves").innerText} moves`,
        `in ${document.querySelector(".times").innerText}`,
        `Ratting: ${document.querySelector(".stars").innerText}`
    ]
    for(let i = 0; i < 4; i++) {
        let p = document.createElement("p");
        p.innerText = `${textArr[i]}`;
        modal.append(p);
    }
    [...modal.querySelectorAll("br")].forEach(e => e.remove());
    let button = document.createElement("button");
    modal.append(button);
    document.body.append(modalContainer);
}

// modalUI();

document.querySelector(".reset").addEventListener("click", reset);