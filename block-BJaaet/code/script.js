let inputBox = document.querySelector("#input-box");
let root = document.querySelector("ul");

let movies = [];

function handler(event) {
    if (event.keyCode == 13) {
        let movie = inputBox.value;
        movies.push(movie);
        event.target.value = "";

    }
    createUI();
} 

function deleteMovie(event) {
    let id = event.target.dataset.id;
    movies.splice(id, 1);
    createUI();
}

function createUI() {
    root.innerText = "";
    movies.forEach((e, i) => {
        let div = document.createElement("div");
        div.classList.add("flex")
        let li = document.createElement("li");
        li.innerText = e;
        let span = document.createElement("span");
        span.setAttribute("data-id", i);
        span.innerText = "X";

        div.append(li, span)
        root.append(div);

        span.addEventListener("click", deleteMovie)
    })
}


inputBox.addEventListener("keyup", handler)