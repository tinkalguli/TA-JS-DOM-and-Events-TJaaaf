let Boxes = document.querySelectorAll(".boxes");
[...Boxes].forEach(e => [...e.children].forEach((e, i) => {
    e.setAttribute("data-figure", `${i + 1}`);
    e.style.transform = "rotateY(180deg)";
}));

function flip(e) {
        e.target.style.transform = "rotateY(0deg)";
        e.target.innerText = e.target.dataset.figure;
        
        setTimeout(function () {
            e.target.style.transform = "rotateY(180deg)";
            e.target.innerText = "";
        }, 5000);
}

[...[...Boxes][0].children].forEach(e =>
    e.addEventListener("click", function (event) {
        flip(event);
    }));

[...Boxes][1].addEventListener("click", function (event) {
        flip(event);
    })