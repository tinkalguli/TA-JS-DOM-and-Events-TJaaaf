let form = document.querySelector("form");

let username = form.elements.username;
let name = form.elements.name;
let email = form.elements.email;
let phone = form.elements.phone;
let password = document.querySelector("#password1");
let passwordCheck = document.querySelector("#password2");

function checkEmpty(inputName) {
  inputName.nextElementSibling.innerText = "";
  inputName.nextElementSibling.innerText = `${inputName.previousElementSibling.textContent} can not be blank`;
  inputName.classList.remove("success");
  inputName.classList.add("error");
}

function checkError(inputName, errorText) {
  inputName.nextElementSibling.innerText = "";
  inputName.nextElementSibling.innerText = errorText;
  inputName.classList.remove("success");
  inputName.classList.add("error");
}

function success(inputName) {
  inputName.nextElementSibling.innerText = "";
  inputName.classList.remove("error");
  inputName.classList.add("success");
}

function result() {
  // Username 
  
  if (username.value == "") {
    checkEmpty(username);
  } else if (username.value.length < 4) {
    checkError(username, "Username can't be less than 4 characters");
  } else {
    success(username);
  }

  // Name

  if (name.value == "") {
    checkEmpty(name);
  } else if (name.value.split("").some(e => Number(e))) {
    checkError(name, "You can't use number in the name field");
  } else {
    success(name);
  }

  // Email

  if (email.value == "") {
    checkEmpty(email);
  } else if (!email.value.split("").some(e => e == "@")) {
    checkError(email, "Not a valid email ('@' is missing)");
  } else if (email.value.slice(0, email.value.indexOf("@")).length < 6) {
    checkError(email, "Email can't be less than 6")
  } else {
    success(email);
  }

  // Phone

  if (phone.value == "") {
    checkEmpty(phone);
  } else if (!phone.value.split("").every(e => Number(e))) {
    checkError(phone, "Phone number can only contain numbers");
  } else if (phone.value.length < 7) {
    checkError(phone, "Phone number can't be less than 7")
  } else {
    success(phone);
  }

  //Password

  if (password.value == "") {
    checkEmpty(password);
  } else if (!password.value.split("").some(e => e == "@" || e == "$")
        || !password.value.split("").some(e => Number(e))) {
    checkError(password, "Password must contain at least a symbol and a number");
  } else {
    success(password);
  }

  // PasswordCheck

  if (passwordCheck.value == "") {
    checkEmpty(passwordCheck);
  } else if (passwordCheck.value !== password.value) {
    checkError(passwordCheck, "Password not match");
  } else {
    success(passwordCheck);
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
  result();
  validSubmission();
}

form.addEventListener("submit", handleSubmit);