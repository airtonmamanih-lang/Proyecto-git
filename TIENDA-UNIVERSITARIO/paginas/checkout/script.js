document
    .getElementById("checkout-form")
    .addEventListener("submit", event => {

        event.preventDefault();


        localStorage.removeItem("cart");


        window.location.href =
            "../confirmacion/index.html";

    });