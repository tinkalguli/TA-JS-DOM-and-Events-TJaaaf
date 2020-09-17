let form = document.querySelector(".container");

let closeBtn = document.createElement("a");
closeBtn.classList.add("closeBtn");
closeBtn.innerText = "Close";

let greet = document.createElement("h1");
let email = document.createElement("h2");
let love = document.createElement("h2");
let color = document.createElement("h2");
let rating = document.createElement("h2");
let genre = document.createElement("h2");
let terms = document.createElement("h2");

function submit(event) {
    event.preventDefault();
    
    form.style = "max-width: 700px";
    greet.innerText = `Hello ${event.target.text.value}`;
    email.innerText = `Email: ${event.target.email.value}`;
    love.innerText = `You Love: ${event.target.love.value}`;
    color.innerText = `Color: ${event.target.color.value}`;
    rating.innerText = `Rating: ${event.target.rating.value}`;
    genre.innerText = `Book Genre: ${event.target.drone.value}`;
    terms.innerText = event.target.terms.checked ?
     "👉You agree to terms and conditions"
      : "👉You agree to terms and conditions";
    
    [...form.children].forEach(e => e.remove());
    form.append(closeBtn, greet, email, love, color, rating, genre, terms)
};

form.addEventListener("submit", submit, true);
closeBtn.addEventListener("click", () => location.reload());