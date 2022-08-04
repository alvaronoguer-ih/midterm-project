function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

document.addEventListener("change", checkInputsValue)

function checkInputsValue () {
let checkInputs = document.querySelectorAll('input');
let inputsArray = [...checkInputs];
const anyEmpty = [];
let btndesact = document.getElementById("btn-submit")

inputsArray.forEach(element => {
    console.log(element.value)
    anyEmpty.push(element.value)
    return anyEmpty;
  });

if (!anyEmpty.includes("")) {
    btndesact.removeAttribute("disabled");
} else {
    btndesact.setAttribute("disabled", "");

}

}

function checkFieldForm(fieldValue) {
  console.log(fieldValue.id)
  if (fieldValue.value != "") {
    document.getElementById(fieldValue.id).setAttribute("style", "background-color:#292E47; color:white");
  } else {
    document.getElementById(fieldValue.id).setAttribute("style", "background-color:#6b708d1a;");
  }
  }

function queryParameters(e) {
  let nuevodos = [...e];
  console.log(nuevodos[0].childNodes[3])
  let title = nuevodos[0].childNodes[3];
  window.location.href = `/post.html?title${title}`
}