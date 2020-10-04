let form = document.querySelector("form");

let username = form.elements.username;
let name = form.elements.name;
let email = form.elements.email;
let phone = form.elements.phone;
let password = document.querySelector("#password1");
let passwordCheck = document.querySelector("#password2");

function checkError(inputName) {
  let condition = (function() {
    if (inputName == username) return inputName.value.length < 4;

    if (inputName == name) return inputName.value.split("").some(e => Number(e));

    if (inputName == email) return inputName.value.slice(0, inputName.value.indexOf("@")).length < 6;

    if (inputName == phone) return !inputName.value.split("").every(e => Number(e)) || inputName.value.length < 7;

    if (inputName == password) return (!inputName.value.split("").some(e => e == "@" || e == "$"))
    || (!inputName.value.split("").some(e => Number(e)));

    if (inputName == passwordCheck) return passwordCheck.value !== password.value;
  })();  

  // (inputName.value.split("").some(e => e == "@" || e == "$")) 
  //   || (inputName.value.split("").some(e => Number(e))) && 

  let errorText = (function () {
    if (inputName == username) return "Username can't be less than 4 characters";

    if (inputName == name) return "You can't use number in the name field";

    if (inputName == email) return "Not a valid email";

    if (inputName == phone) return "Phone number can only contain numbers";

    if (inputName == password) return "Password must contain at least a symbol and a number";

    if (inputName == passwordCheck) return "Password not match";
  })();

  // if (inputName.value == "") {
  //   if (inputName.nextElementSibling == null) {
  //     let small = document.createElement("small");
  //     small.innerText = `${inputName.previousElementSibling.textContent} can not be blank`;
  //     inputName.parentElement.append(small);
  //     inputName.parentElement.classList.add("error");
  //     inputName.parentElement.classList.remove("success");
  //   } 
  // } else if (inputName.nextElementSibling) {
  //   inputName.nextElementSibling.remove();
  //   inputName.parentElement.classList.add("success");
  //   inputName.parentElement.classList.remove("error");
  // }
  
  // if (condition) {
  //     if (inputName.nextElementSibling == null) {
  //       let small = document.createElement("small");
  //       small.innerText = errorText;
  //       inputName.parentElement.append(small);
  //       inputName.parentElement.classList.add("error");
  //       inputName.parentElement.classList.remove("success");
  //     }
  // } else if (inputName.nextElementSibling) {
  //   inputName.nextElementSibling.remove();
  //   inputName.parentElement.classList.add("success");
  //   inputName.parentElement.classList.add("error");
  // } else inputName.parentElement.classList.add("success");

  if (inputName.value == "") {
    console.log("blank");
    inputName.nextElementSibling.innerText = "";
    inputName.nextElementSibling.innerText = `${inputName.previousElementSibling.textContent} can not be blank`;
    inputName.classList.remove("success");
    inputName.classList.add("error");
  } else if (condition) {
    console.log("error");
    inputName.nextElementSibling.innerText = "";
    inputName.nextElementSibling.innerText = errorText;
    inputName.classList.remove("success");
    inputName.classList.add("error");
  } else {
    console.log("success")
    inputName.nextElementSibling.innerText = "";
    inputName.classList.remove("error");
    inputName.classList.add("success");
  }
}

function validSubmission() {
  let allFormControl = document.querySelectorAll("input");
  let isValid = [...allFormControl].every(e => e.classList.contains("success"));
  if (isValid) {
    let validHeading = document.createElement("h2");
    let validBox = document.createElement("div");
    let validHeadingBox = document.createElement("div");
    let validButton = document.createElement("button");

    validHeadingBox.append(validHeading, validButton);
    validBox.append(validHeadingBox);
    document.body.append(validBox);

    validBox.classList.add("valid-box");
    validHeadingBox.classList.add("valid-heading-box");
    validHeading.classList.add("valid-heading");
    validButton.classList.add("valid-button");

    validHeading.innerText = "User Added Successfully!";
    validButton.innerText = "Done";

    validButton.addEventListener("click", function() {
      location.reload();
    })
  }
}

function handleSubmit(event) {
  event.preventDefault();

  checkError(username);
  checkError(name);
  checkError(email);
  checkError(phone);
  checkError(password);
  checkError(passwordCheck);
  validSubmission();
}

form.addEventListener("submit", handleSubmit);