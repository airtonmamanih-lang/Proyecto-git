const shirts = [

    {
        id: 101,
        name: "Camiseta Local",
        category: "Camisetas",
        price: 199.90,
        image:
            "../../assets/img/productos/camisetas/camiseta-local.jpg"
    },

    {
        id: 102,
        name: "Camiseta Visitante",
        category: "Camisetas",
        price: 199.90,
        image:
            "../../assets/img/productos/camisetas/camiseta-visita.jpg"
    },

    {
        id: 103,
        name: "Camiseta Alternativa",
        category: "Camisetas",
        price: 199.90,
        image:
            "../../assets/img/productos/camisetas/camiseta-alternativa.jpg"
    },

    {
        id: 104,
        name: "Camiseta Retro",
        category: "Camisetas",
        price: 219.90,
        image:
            "../../assets/img/productos/camisetas/camiseta-retro.jpg"
    }

];


const grid =
    document.getElementById("shirt-grid");


shirts.forEach(product => {

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