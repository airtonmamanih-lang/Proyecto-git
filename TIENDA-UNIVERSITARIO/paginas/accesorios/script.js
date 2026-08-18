const accessories = [

    {
        id: 301,
        name: "Gorro Deportivo",
        category: "Accesorios",
        price: 59.90,
        image:
            "../../assets/img/productos/accesorios/gorro.jpg"
    },

    {
        id: 302,
        name: "Bufanda",
        category: "Accesorios",
        price: 69.90,
        image:
            "../../assets/img/productos/accesorios/bufanda.jpg"
    },

    {
        id: 303,
        name: "Mochila",
        category: "Accesorios",
        price: 129.90,
        image:
            "../../assets/img/productos/accesorios/mochila.jpg"
    },

    {
        id: 304,
        name: "Llavero",
        category: "Accesorios",
        price: 29.90,
        image:
            "../../assets/img/productos/accesorios/llavero.jpg"
    },

    {
        id: 305,
        name: "Pelota",
        category: "Accesorios",
        price: 89.90,
        image:
            "../../assets/img/productos/accesorios/pelota.jpg"
    }

];


const grid =
    document.getElementById("accessories-grid");


accessories.forEach(product => {

    grid.innerHTML += `

        <article class="product-card">

            <div class="product-image">

                <button
                    class="product-wishlist"
                    onclick="toggleFavorite(${product.id})"
                >
                    ♡
                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="product-price">

                    <strong>
                        S/ ${product.price.toFixed(2)}
                    </strong>

                </div>

                <button
                    class="btn btn-primary btn-full"
                    style="margin-top:15px;"
                    onclick='addToCart(${JSON.stringify(product)})'
                >
                    Agregar al carrito
                </button>

            </div>

        </article>

    `;

});