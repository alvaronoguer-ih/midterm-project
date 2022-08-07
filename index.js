document.addEventListener("change", checkInputsValue)
document.addEventListener("load", titleSubtitle)


function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

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

function queryParameters(number) {
  const datos = document.querySelectorAll('.project-card')
  const nuevo = [...datos];
  console.log(nuevo)
  let title = nuevo[number].childNodes[3].childNodes[0].nodeValue;
  let subtitle = nuevo[number].childNodes[5].childNodes[0].nodeValue;
  title = btoa(title)
  subtitle = btoa(subtitle)
  console.log(title)
  console.log(typeof(subtitle))
  window.location.href = `/post.html?title=${title}&subtitle=${subtitle}`
}

function contactBtn() {
  window.location.href = '/contact.html'
}

function titleSubtitle() {
  const valores = window.location.search;
  console.log(valores)
  const urlParams = new URLSearchParams(valores);
  console.log(urlParams)
  let title = urlParams.get('title');
  let subtitle = urlParams.get('subtitle')
  title = atob(title)
  subtitle = atob(subtitle)
  console.log(title)
  console.log(subtitle)

  document.getElementById('variableTitle').innerHTML = title; 
  document.getElementById('variableSubtitle').innerHTML = subtitle; 


}
