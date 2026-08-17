const botonPerfil =
    document.getElementById("btnPerfil");

const informacionExtra =
    document.getElementById("informacionExtra");


botonPerfil.addEventListener("click", function () {

    informacionExtra.classList.toggle("oculto");


    if (informacionExtra.classList.contains("oculto")) {

        botonPerfil.textContent = "Mostrar más";

    } else {

        botonPerfil.textContent = "Mostrar menos";

    }

});