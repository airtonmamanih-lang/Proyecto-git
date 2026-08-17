const botones = document.querySelectorAll(".botonServicio");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        alert("Próximamente tendrás más información sobre este servicio.");

    });

});