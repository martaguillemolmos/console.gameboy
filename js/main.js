// FUNCIÓN ENCENDER Y APAGAR EL PILOTO DE LA LUZ + PANTALLA al pulsar sobre ON-OFF.

const encender = document.getElementById("encender");
let piloto = document.getElementById("piloto");
let pantalla = document.getElementById("pantalla");
var audio = document.getElementById("audio");

encender.addEventListener("click", function () {
  if (
    piloto.style.backgroundColor === "green" ||
    piloto.style.backgroundColor === ""
  ) {
    audio.play();
    piloto.style.backgroundColor = "red";
    pantalla.style.backgroundImage = "url('img/inicio.png')";
  } else {
    piloto.style.backgroundColor = "green";
    pantalla.style.backgroundImage = "";
    pantalla.style.backgroundColor = "green";
  }
});

// FUNCIÓN CAMBIAR DE PANTALLA, BOTON A Y B

let botonA = document.getElementById("botonA");
let botonB = document.getElementById("botonB");

botonA.addEventListener("click", function () {
  if (piloto.style.backgroundColor === "red") {
    pantalla.style.backgroundImage = "url('img/logonintendo.png')";
  }
});

botonB.addEventListener("click", function () {
  if (piloto.style.backgroundColor === "red") {
    pantalla.style.backgroundImage = "url('img/inicio.png')";
  }
});

// BOTON SELECT Y RESET

let select = document.getElementById("selectBoton");
let reset = document.getElementById("clickStart");

select.addEventListener("click", function () {
  if (piloto.style.backgroundColor === "red") {
    pantalla.style.backgroundImage = "url('img/logonintendo.png')";
  }
});

reset.addEventListener("click", function () {
  if (piloto.style.backgroundColor === "red") {
    pantalla.style.backgroundImage = "url('img/inicio.png')";
  }
});
