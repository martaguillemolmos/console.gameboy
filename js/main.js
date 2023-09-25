// FUNCIÓN ENCENDER Y APAGAR EL PILOTO DE LA LUZ al pulsar sobre ON-OFF.
console.log("1");

const encender = document.getElementById("encender");
let piloto = document.getElementById("piloto");
let pantalla = document.getElementById("pantalla");

encender.addEventListener('click', function () {
    console.log ("3");
if (piloto.style.backgroundColor === "green" || piloto.style.backgroundColor === ''){
    console.log ("4");
    piloto.style.backgroundColor = "red";
    pantalla.style.backgroundColor = "blue";
 } else {
        piloto.style.backgroundColor = "green";
        pantalla.style.backgroundColor = "green";
        console.log("5")
}

});
