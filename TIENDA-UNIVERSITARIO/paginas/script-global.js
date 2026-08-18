/* =========================================================
   SCRIPT GLOBAL
   ========================================================= */


/* =========================================================
   MENÚ MOBILE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("open");

        });

    }


    /* =====================================================
       AÑO AUTOMÁTICO
       ===================================================== */

    document.querySelectorAll("[data-year]")
        .forEach(element => {

            element.textContent =
                new Date().getFullYear();

        });


    /* =====================================================
       CARRITO
       ===================================================== */

    updateCartCount();


    /* =====================================================
       CERRAR MENÚ AL CAMBIAR DE PÁGINA
       ===================================================== */

    document.querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks?.classList.remove("open");

            });

        });

});


/* =========================================================
   CARRITO
   ========================================================= */

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


function updateCartCount() {

    const cart =
        getCart();

    const quantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    document.querySelectorAll(".cart-count")
        .forEach(element => {

            element.textContent =
                quantity;

        });

}


function addToCart(product) {

    const cart =
        getCart();


    const existingProduct =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    showToast(
        `${product.name} fue agregado al carrito`
    );

}


function removeFromCart(productId) {

    const cart =
        getCart()
        .filter(
            item =>
                item.id !== productId
        );


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();

}


/* =========================================================
   FAVORITOS
   ========================================================= */

function getFavorites() {

    return JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

}


function toggleFavorite(productId) {

    let favorites =
        getFavorites();


    if (favorites.includes(productId)) {

        favorites =
            favorites.filter(
                id => id !== productId
            );

        showToast(
            "Producto eliminado de favoritos"
        );

    } else {

        favorites.push(productId);

        showToast(
            "Producto agregado a favoritos"
        );

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    let toast =
        document.querySelector(".toast");


    if (!toast) {

        toast =
            document.createElement("div");

        toast.className =
            "toast";

        document.body.appendChild(toast);

    }


    toast.textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}