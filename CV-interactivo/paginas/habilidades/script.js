const botonHabilidades =
    document.getElementById("btnHabilidades");

const mensaje =
    document.getElementById("mensajeHabilidades");


botonHabilidades.addEventListener("click", function () {

    mensaje.textContent =
        "También tengo conocimientos en bases de datos, algoritmos, estructuras de datos y desarrollo de proyectos.";

});