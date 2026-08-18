/* =========================================================
   INICIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const wishlistButtons =
        document.querySelectorAll(
            ".product-wishlist"
        );


    wishlistButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("liked");

            button.textContent =
                button.classList.contains("liked")
                    ? "♥"
                    : "♡";

            showToast(
                button.classList.contains("liked")
                    ? "Producto agregado a favoritos"
                    : "Producto eliminado de favoritos"
            );

        });

    });

});