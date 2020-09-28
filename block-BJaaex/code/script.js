let container = document.querySelector(".container");

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
        box.append(i);
        container.append(box);

        box.addEventListener("click", flip);
    });
}

createUI();
createUI();

function flip(event) {
    if (event.target.classList.contains("box") || event.target.classList.contains("fas")) {
        
        
        
        if(event.target.tagName == "I") {
            event.target.parentElement.classList.add("box-flip");
        } else {
            event.target.classList.add("box-flip");
        }
    }
}
