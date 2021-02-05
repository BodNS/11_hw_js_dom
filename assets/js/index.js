let isValid;

const regExpUser = /^[\da-z]{6,20}$/i;
const inputUserName = document.getElementById("userName");
inputUserName.addEventListener("blur", funValidUser);

const regExpPas = /^(?=.*[0-9])(?=.*[A-Z]).{8,20}$/; //честно скопипастила с инета
const inputUserPas = document.getElementById("password");
inputUserPas.addEventListener("blur", funValidUser);

function funValidUser(event) {
  let regExp;
  event.target == inputUserName ? (regExp = regExpUser) : (regExp = regExpPas);
  regExp.test(event.target.value) ? (isValid = true) : (isValid = false);
  changeClass(event.target);
}

function changeClass(elem) {
  if (isValid) {
    elem.classList.remove("stil");
    elem.classList.add("validStyle");
  } else {
    elem.classList.remove("stil");
    elem.classList.add("invalidStyle");
  }
}
