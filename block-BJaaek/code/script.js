let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");


firstBox.addEventListener("click" , function() {
    let color = "#" + parseInt(Math.random() * 0xffffffffff).toString(16).slice(0, 6);
    firstBox.style.backgroundColor = `${color}`;
});

secondBox.addEventListener("mousemove" , function() {
    let color = "#" + parseInt(Math.random() * 0xffffffffff).toString(16).slice(0, 6);
    secondBox.style.backgroundColor = `${color}`;
});