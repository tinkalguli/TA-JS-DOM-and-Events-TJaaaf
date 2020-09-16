let yourBtns = document.querySelectorAll(".btn-you");
let compBtns = document.querySelectorAll(".btn-com");

let userBtnContainer = document.querySelector(".user-btns");

function clicked (e) {
    e.target.style.color = "#000000";
}

userBtnContainer.addEventListener("click", function (event) {
    return clicked (event);
});
