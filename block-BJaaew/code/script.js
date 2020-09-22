function main() {
    let container = document.querySelector(".container");
let ul = document.querySelector("ul");
let search = document.querySelector("#search");

let allPeople = got.houses.map(val => val.people).flat();
let filteredPeople = [];

function createUI(arr) {
    container.innerText = "";
    arr.forEach(e => {
        let box = document.createElement("article");
        let flexContainer = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let details = document.createElement("p");
        let button = document.createElement("a");

        img.src = e.image;
        name.innerText = e.name;
        details.innerText = e.description;
        button.innerText = "Learn More!";

        box.classList.add("box");
        flexContainer.classList.add("flex");
        img.classList.add("img");
        details.classList.add("details");
        button.classList.add("button");

        flexContainer.append(img, name);
        box.append(flexContainer, details, button);
        container.append(box);
    });
}

function filtered(event) {
    filteredPeople = [];
    
    let allHouses = document.querySelectorAll(".house");
    [...allHouses].forEach(e => e.classList.remove("active"));
    event.target.classList.add("active");
    
    if (event.target.innerText == "All") {
        createUI(allPeople);
    } else {
        got.houses.forEach(e => {
        if(e.name == `${event.target.innerText}`) {
            e.people.forEach(a => filteredPeople.push(a));
        };
      });
      createUI(filteredPeople);
    }
}

function searchPeople(input) {
    let search = filteredPeople.filter(e => 
        e.name.toLowerCase().includes(input.target.value.toLowerCase()));
    createUI(search);
}

createUI(allPeople);

ul.addEventListener("click", filtered);
search.addEventListener("input", searchPeople);
}

main();