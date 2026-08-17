const formulario = document.getElementById("formularioContacto");

const resultado = document.getElementById("resultado");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const nombre = document.getElementById("nombre").value;


    resultado.textContent =
        "¡Gracias " + nombre + "! Tu mensaje fue enviado correctamente.";


    formulario.reset();

});