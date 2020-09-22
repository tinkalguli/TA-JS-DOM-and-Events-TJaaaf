let inputBox = document.querySelector("#input-box");
let root = document.querySelector("ul");
let container = document.querySelector(".container");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function handler(event) {
    let value = event.target.value;
    if (event.keyCode == 13 && value !== "") {
        let todo = {
            name: value,
            isDone: false
        };
        todos.push(todo);
        event.target.value = "";
    }
    localStorage.setItem("todos", JSON.stringify(todos));
    createUI(todos);
} 

function deleteMovie(event) {
    let id = event.target.dataset.id;
    todos.splice(id, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    createUI(todos);
}

function isComplete(event) {
    let id = event.target.dataset.id;
    todos[id].isDone = !todos[id].isDone;
    localStorage.setItem("todos", JSON.stringify(todos));
    createUI(todos);
}

function filter(event) {
    if (event.target.innerText == "All") {
        createUI(todos);
    } else if (event.target.innerText == "Active") {
        let filtered = todos.filter(e => e.isDone == false);
        createUI(filtered);
    } else if (event.target.innerText == "Completed") {
        let filtered = todos.filter(e => e.isDone == true);
        createUI(filtered);
    } else if (event.target.innerText == "Clear Completed") {
        todos = [];
        todos = todos.filter(e => e.isDone == false);
        createUI(todos);
    }
}

function createUI(arr) {
    root.innerText = "";
    arr.forEach((todo, i) => {
        let li = document.createElement("li");
        li.classList.add("flex-between");
        let div = document.createElement("div");
        div.classList.add("flex");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.setAttribute("data-id", i);
        checkbox.checked = todo.isDone;
        let p = document.createElement("p");
        p.innerText = todo.name;
        let span = document.createElement("span");
        span.setAttribute("data-id", i);
        span.innerText = "x";

        div.append(checkbox, p);
        li.append(div, span);
        root.append(li);

        span.addEventListener("click", deleteMovie);
        checkbox.addEventListener("change", isComplete);
    })
}

function createButtons() {
    let buttons = document.createElement("div");
    buttons.classList.add("flex-between", "button-box");
    let filoterButtons = document.createElement("div");
    filoterButtons.classList.add("flex-between");
    let active = document.createElement("button");
    active.innerText = "Active";
    let completed = document.createElement("button");
    completed.innerText = "Completed";
    let all = document.createElement("button");
    all.innerText = "All";
    let clearCompleted = document.createElement("button");
    clearCompleted.innerText = "Clear Completed";

    filoterButtons.append(active, completed, all);
    buttons.append(filoterButtons, clearCompleted);
    container.append(buttons);

    filoterButtons.addEventListener("click", filter);
}

createUI(todos);

if (root.innerText !== "") {
    createButtons();
}

localStorage.setItem("todos", JSON.stringify(todos));

inputBox.addEventListener("keyup", handler);