const botones =
    document.querySelectorAll(".btn-detalles");

const mensaje =
    document.getElementById("mensajeProyecto");


botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const proyecto =
            boton.dataset.proyecto;

        mensaje.textContent =
            "Has seleccionado: " + proyecto;

    });

});