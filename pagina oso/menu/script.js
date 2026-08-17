const boton = document.getElementById("botonBienvenida");

const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {

    mensaje.textContent = "¡Bienvenido a nuestro sitio web!";

});