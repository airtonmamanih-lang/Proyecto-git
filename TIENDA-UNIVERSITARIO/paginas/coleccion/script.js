const collectionProducts = [

    {
        id: 401,
        name: "Camiseta Retro",
        category: "Colección",
        price: 219.90,
        image:
            "../../assets/img/productos/coleccion/coleccion-retro.jpg"
    },

    {
        id: 402,
        name: "Colección Especial",
        category: "Colección",
        price: 249.90,
        image:
            "../../assets/img/productos/coleccion/coleccion-especial.jpg"
    },

    {
        id: 403,
        name: "Colección Hincha",
        category: "Colección",
        price: 159.90,
        image:
            "../../assets/img/productos/coleccion/coleccion-hincha.jpg"
    }

];


const grid =
    document.getElementById("collection-grid");


collectionProducts.forEach(product => {

    grid.innerHTML += `

        <article class="product-card">

            <div class="product-image">

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