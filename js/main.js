// FUNCIÓN ENCENDER Y APAGAR EL PILOTO DE LA LUZ al pulsar sobre ON-OFF.
console.log ("1");
const encender= document.getElementById ('encender');
const piloto =document.getElementById ('piloto');
const pantalla =document.getElementById('pantalla');
console.log ("2");

encender.addEventListener('click', function () {
    console.log ("3")
if (piloto.style.backgroundColor === "green"){
    console.log ("4");
    piloto.style.backgroundColor = "red";
    pantalla.style.backgroundColor = "blue";
 }else {
        piloto.style.backgroundColor = "green";
        pantalla.style.backgroundColor = "green";
        console.log("5")
    } 

});


