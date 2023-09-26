const encender = document.getElementById("encender");
let piloto = document.getElementById("piloto");
let pantalla = document.getElementById("pantalla");
var audio = document.getElementById("audio");
let video = document.getElementById("video");

const arrayImagenes = [
  "imagen-5.jpg",
  "imagen-2.jpg",
  "imagen-3.jpg",
  "imagen-4.jpg",
];
let avanzar = document.getElementById("avanzar1");
let indexImage = 0;

// FUNCIÓN ENCENDER Y APAGAR EL PILOTO DE LA LUZ + PANTALLA al pulsar sobre ON-OFF.

encender.addEventListener("click", function () {
  if (
    piloto.style.backgroundColor === "green" ||
    piloto.style.backgroundColor === ""
  ) {
    audio.play();
    piloto.style.backgroundColor = "red";
    video.style.display = "initial";
    video.play();
  } else {
    piloto.style.backgroundColor = "green";
    pantalla.style.backgroundImage = "";
    video.style.display = "none";
    pantalla.style.backgroundColor = "green";
  }
});

// FUNCIÓN CAMBIAR DE PANTALLA, BOTON A Y B

let botonA = document.getElementById("botonA");
let botonB = document.getElementById("botonB");

botonA.addEventListener("click", function () {
  if (piloto.style.backgroundColor === "red") {
    video.style.display = "none";
    pantalla.style.backgroundImage = "url('img/pantallaA.jpg')";
  }
});

botonB.addEventListener("click", function () {
  if (piloto.style.backgroundColor === "red") {
    video.style.display = "none";

    pantalla.style.backgroundImage = "url('img/pantallaB.jpg')";
  }
});

// BOTON SELECT Y RESET

let select = document.getElementById("selectBoton");
let reset = document.getElementById("clickStart");

select.addEventListener("click", function () {
  if (piloto.style.backgroundColor === "red") {
    video.style.display = "none";
    pantalla.style.backgroundImage = "url('img/pantallaSelect.jpg')";
  }
});

reset.addEventListener("click", function () {
  if (piloto.style.backgroundColor === "red") {
    console.log("2");
    pantalla.style.backgroundImage = "white";
    audio.play();
    video.style.display = "initial";
    video.play();
  }
});

avanzar.addEventListener("click", function () {
  if (piloto.style.backgroundColor === "red") {
    video.style.display = "none";
    console.log(indexImage);
    if (indexImage !== 3) {
      let imagen = arrayImagenes[indexImage];
      pantalla.style.backgroundImage = `url('img/${imagen}')`;
      indexImage = indexImage + 1;
    } else {
      let imagen = arrayImagenes[indexImage];
      pantalla.style.backgroundImage = `url('img/${imagen}')`;
      indexImage = 0;
    }

    console.log(pantalla.style);
  }
});
