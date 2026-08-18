const cartContainer =
    document.getElementById("cart-items");

const subtotalElement =
    document.getElementById("subtotal");

const totalElement =
    document.getElementById("total");


function renderCart() {

    const cart =
        getCart();


    cartContainer.innerHTML = "";


    if (cart.length === 0) {

        cartContainer.innerHTML = `

            <div class="empty-state">

                <div class="empty-state-icon">
                    🛒
                </div>

                <h2>
                    Tu carrito está vacío
                </h2>

                <p>
                    Agrega algunos productos
                    para comenzar tu compra.
                </p>

                <a
                    href="../productos/index.html"
                    class="btn btn-primary"
                >
                    Explorar productos
                </a>

            </div>

        `;


        subtotalElement.textContent =
            "S/ 0.00";

        totalElement.textContent =
            "S/ 0.00";

        return;

    }


    let subtotal = 0;


    cart.forEach(item => {

        subtotal +=
            item.price *
            item.quantity;


        cartContainer.innerHTML += `

            <article class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        S/ ${item.price.toFixed(2)}
                    </p>

                    <p>
                        Cantidad:
                        ${item.quantity}
                    </p>

                    <button
                        class="cart-remove"
                        onclick="deleteItem(${item.id})"
                    >
                        Eliminar
                    </button>

                </div>

                <strong>
                    S/
                    ${(item.price * item.quantity).toFixed(2)}
                </strong>

            </article>

        `;

    });


    subtotalElement.textContent =
        `S/ ${subtotal.toFixed(2)}`;

    totalElement.textContent =
        `S/ ${subtotal.toFixed(2)}`;

}


function deleteItem(id) {

    removeFromCart(id);

    renderCart();

}


renderCart();