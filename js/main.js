// FUNCIÓN ENCENDER Y APAGAR EL PILOTO DE LA LUZ + PANTALLA al pulsar sobre ON-OFF.

const encender = document.getElementById("encender");
let piloto = document.getElementById("piloto");
let pantalla = document.getElementById("pantalla");

encender.addEventListener("click", function () {
  if (
    piloto.style.backgroundColor === "green" ||
    piloto.style.backgroundColor === ""
  ) {
    piloto.style.backgroundColor = "red";
    pantalla.style.backgroundImage = "url('img/logonintendo.png')";
  } else {
    piloto.style.backgroundColor = "green";
    pantalla.style.backgroundImage = "";
    pantalla.style.backgroundColor = "green";
  }
});
