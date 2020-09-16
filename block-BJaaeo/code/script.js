let display = document.querySelector("#display");
let calculator = document.querySelector(".calculator");

function displayNum(e) {
    display.value += e.target.value;
}

function calculate() {
    let expression = display.value;
    if(expression) display.value = eval(expression);
}

function clean() {
    display.value = "";
}

function backSpace() {
    let expression = display.value;
    display.value = expression.substring(0, expression.length-1)
}

calculator.addEventListener("click", function (event) {
    if (event.target.classList.contains("display")) {
        displayNum(event);
    }
    if (event.target.classList.contains("equal")) {
        calculate();
    }
    if (event.target.classList.contains("backspace")) {
        backSpace();
    }
    if (event.target.classList.contains("clean")) {
        clean();
    }
});