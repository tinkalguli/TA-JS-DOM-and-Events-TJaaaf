let form = document.querySelector(".container");

let modalContainer = document.createElement("section");
let modal = document.createElement("div");
let closeBtn = document.createElement("a");
let greet = document.createElement("h1");
let email = document.createElement("h2");
let love = document.createElement("h2");
let color = document.createElement("h2");
let rating = document.createElement("h2");
let genre = document.createElement("h2");
let terms = document.createElement("h2");

modalContainer.classList.add("modal-container");
modal.classList.add("modal");
closeBtn.classList.add("closeBtn");
closeBtn.innerText = "Close";

function submit(event) {
    event.preventDefault();
    
    greet.innerText = `Hello ${form.elements.text.value}`;
    email.innerText = `Email: ${form.elements.email.value}`;
    love.innerText = `You Love: ${form.elements.love.value}`;
    color.innerText = `Color: ${form.elements.color.value}`;
    rating.innerText = `Rating: ${form.elements.rating.value}`;
    genre.innerText = `Book Genre: ${form.elements.drone.value}`;
    terms.innerText = event.target.terms.checked ?
     "👉You agree to terms and conditions"
      : "👉You don't agree to terms and conditions";
    
    modal.append(closeBtn, greet, email, love, color, rating, genre, terms);
    modalContainer.append(modal);
    document.body.append(modalContainer);
};

form.addEventListener("submit", submit);
closeBtn.addEventListener("click", () => location.reload());