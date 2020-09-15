let boxes = document.querySelector(".boxes");

for (let i = 0; i < 500; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    // box.innerText = num;
    boxes.append(box);
}

let allBoxes = document.querySelectorAll(".box");

boxes.addEventListener("mousemove", function () {
    [...allBoxes].forEach(e => {
        e.style.backgroundColor = `#${parseInt(Math.random() * 1000)}`;
        e.innerText = `${parseInt(Math.random() * 500)}`;
    });
});

