let form = document.querySelector("form");

let userInfo = {};


function checkError(inputName) {
  let condition = (function() {
    if (inputName == form.elements.username) return inputName.value.length < 4;

    if (inputName == form.elements.name) return inputName.value.split("").filter(e => !isNaN(e)).length > 0 || userInfo.name == "";

    if (inputName == form.elements.email) return inputName.value.includes("@") || userInfo.email.length < 6;

    if (inputName == form.elements.phone) return inputName.value.split("").filter(e => isNaN(e)).length > 0 || userInfo.phone == "";

    if (inputName == document.querySelector("#password1")) return (inputName.value.split("").filter(e => { return e.includes("@") || e.includes("$")}).length == 0) 
    || (userInfo.password.split("").filter(e => !isNaN(e)).length == 0);

    if (inputName == document.querySelector("#password2")) return userInfo.passwordCheck !== userInfo.password;
  })();

  let errorText = (function () {
    if (inputName == form.elements.username) return `Username can't be less than 4 characters (replace ${inputName.value} with field name`;

    if (inputName == form.elements.name) return "You can't use number in the name field";

    if (inputName == form.elements.email) return "Not a valid email";

    if (inputName == form.elements.phone) return "Phone number can only contain numbers";

    if (inputName == document.querySelector("#password1")) return "Password must contain at least a symbol and a number";

    if (inputName == document.querySelector("#password2")) return "Password not match";
  })();

  if (inputName.value.length == 0) {
    if (inputName.nextElementSibling == null) {
      let small = document.createElement("small");
      small.innerText = `${inputName.previousElementSibling.textContent} can not be blank`;
      inputName.parentElement.append(small);
    } 
  } else if (inputName.nextElementSibling) {
    inputName.nextElementSibling.remove();
  }
  
  if (condition) {
      if (inputName.nextElementSibling == null) {
        let small = document.createElement("small");
        small.innerText = errorText;
        inputName.parentElement.append(small);
      }
  } else if (inputName.nextElementSibling) {
    inputName.nextElementSibling.remove();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  userInfo.username = form.elements.username.value;
  userInfo.name = form.elements.name.value;
  userInfo.email = form.elements.email.value;
  userInfo.phone = form.elements.phone.value;
  userInfo.password = document.querySelector("#password1").value;
  userInfo.passwordCheck = document.querySelector("#password2").value;

  checkError(form.elements.username);
  checkError(form.elements.name);
  checkError(form.elements.email);
  checkError(form.elements.phone);
  checkError(document.querySelector("#password1"));
  checkError(document.querySelector("#password2"));

  // send data to server
  console.dir(userInfo);
}


form.addEventListener("submit", handleSubmit);