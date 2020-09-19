let form = document.querySelector("form");

let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  userInfo.username = form.elements.username.value;
  userInfo.name = form.elements.name.value;
  userInfo.email = form.elements.email.value;
  userInfo.phone = form.elements.phone.value;
  userInfo.password = document.querySelector("#password1").value;
  userInfo.passwordCheck = document.querySelector("#password2").value;

  if (userInfo.username.length < 4) {
    let usernameError = document.createElement("small");
    usernameError.innerText = `Username can't be less than 4 characters (replace ${userInfo.username} with field name)`;
    form.elements.username.parentElement.append(usernameError);
  }

  if (userInfo.name.split("").filter(e => !isNaN(e)).length > 0 || userInfo.name == "") {
    let nameError = document.createElement("small");
    nameError.innerText = "You can't use number in the name field";
    form.elements.name.parentElement.append(nameError);
  }

  if (!userInfo.email.includes("@") || userInfo.email.length < 6) {
    let emailError = document.createElement("small");
    emailError.innerText = "Not a valid email";
    form.elements.email.parentElement.append(emailError);
  }

  if (userInfo.phone.split("").filter(e => isNaN(e)).length > 0 || userInfo.phone == "") {
    let phoneError = document.createElement("small");
    phoneError.innerText = "Phone number can only contain numbers";
    form.elements.phone.parentElement.append(phoneError);
  }

  if ((userInfo.password.split("").filter(e => { return e.includes("@") || e.includes("$")}).length == 0)
   || (userInfo.password.split("").filter(e => !isNaN(e)).length == 0)) {
    let passwordError = document.createElement("small");
    passwordError.innerText = "Password must contain at least a symbol and a number";
    document.querySelector("#password1").parentElement.append(passwordError);
  } 

  if (userInfo.passwordCheck !== userInfo.password) {
    let password2Error = document.createElement("small");
    password2Error.innerText = "Password must contain at least a symbol and a number";
    document.querySelector("#password2").parentElement.append(password2Error);
  } else document.querySelector("#password2").nextElementSibling.remove();

  // send data to server
  console.dir(userInfo);
}

form.addEventListener("submit", handleSubmit);