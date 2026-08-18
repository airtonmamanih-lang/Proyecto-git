const trainingProducts = [

    {
        id: 201,
        name: "Polo de Entrenamiento",
        category: "Entrenamiento",
        price: 119.90,
        image:
            "../../assets/img/productos/entrenamiento/polo-entrenamiento.jpg"
    },

    {
        id: 202,
        name: "Short Deportivo",
        category: "Entrenamiento",
        price: 99.90,
        image:
            "../../assets/img/productos/entrenamiento/short-entrenamiento.jpg"
    },

    {
        id: 203,
        name: "Buzo Deportivo",
        category: "Entrenamiento",
        price: 179.90,
        image:
            "../../assets/img/productos/entrenamiento/buzo-deportivo.jpg"
    },

    {
        id: 204,
        name: "Casaca de Entrenamiento",
        category: "Entrenamiento",
        price: 249.90,
        image:
            "../../assets/img/productos/entrenamiento/casaca-entrenamiento.jpg"
    }

];


const grid =
    document.getElementById("training-grid");


trainingProducts.forEach(product => {

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