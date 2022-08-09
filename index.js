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
  let img = nuevo[number].childNodes[1].attributes.src.value
  title = btoa(title)
  subtitle = btoa(subtitle)
  img = btoa(img)
  console.log(title)
  console.log(typeof(subtitle))
  window.location.href = `/post.html?title=${title}&subtitle=${subtitle}&img=${img}`
}

function contactBtn() {
  window.location.href = '/contact.html'
}

function backHome() {
  window.location.href = '/index.html'
}

function suscribed() {
  console.log("ok")
  const validador = document.getElementsByClassName('contact-form-email')[0].childNodes[3].value;

  if (checkEmail(validador) == true) {
  document.querySelector('.contact-area span').setAttribute('style', 'display: none')
  document.querySelector('.contact-area h3').innerHTML = `Thanks for subscribing`
  document.querySelector('.contact-form').setAttribute('style', 'display: none')
  } else {
    console.log("NOPE")
    swal("Te has dejado algo", "Introduce un email válido para continuar", "error");
  }
}

function checkEmail(email) {
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  let emailToCheck = email;
  let emailchecked = emailRegex.test(emailToCheck)
  console.log(emailchecked)
  return emailchecked


}



function titleSubtitle() {
  const valores = window.location.search;
  console.log(valores)
  const urlParams = new URLSearchParams(valores);
  console.log(urlParams)
  let title = urlParams.get('title');
  let subtitle = urlParams.get('subtitle')
  let img = urlParams.get('img')
  img = atob(img)
  title = atob(title)
  subtitle = atob(subtitle)
  console.log(title)
  console.log(subtitle)
  console.log(img)

  document.getElementById('variableTitle').innerHTML = title; 
  document.getElementById('variableSubtitle').innerHTML = subtitle; 
  document.querySelector('.project-img').setAttribute("style", `background-image: url('${img}')`)
  document.querySelector('.project-img-bg').setAttribute("style", `background-image: url('${img}')`)

}

function thanksPage() {
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  let name = urlParams.get('fname');
  let phone = urlParams.get('phone');
  let email = urlParams.get('email');
  let greet = `Gracias por contactar con nosotros, ${name}`
  let parrafo = `Nos pondremos en contacto contigo a través de email (${email}) o llamándote al ${phone}`

  document.getElementById('thanks-h2').innerHTML = greet;
  document.getElementById('thanks-p').innerHTML = parrafo;

  console.log(name)

  if (name == null){ window.location.href = "/contact.html" }
}


