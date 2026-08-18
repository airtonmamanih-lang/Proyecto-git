/* =========================================================
   PRODUCTOS
   ========================================================= */

const products = [

    {
        id: 1,
        name: "Camiseta Local",
        category: "Camisetas",
        price: 199.90,
        image:
            "../../assets/img/productos/camisetas/camiseta-local.jpg"
    },

    {
        id: 2,
        name: "Camiseta Visitante",
        category: "Camisetas",
        price: 199.90,
        image:
            "../../assets/img/productos/camisetas/camiseta-visita.jpg"
    },

    {
        id: 3,
        name: "Camiseta Retro",
        category: "Colección",
        price: 219.90,
        image:
            "../../assets/img/productos/camisetas/camiseta-retro.jpg"
    },

    {
        id: 4,
        name: "Polo de Entrenamiento",
        category: "Entrenamiento",
        price: 119.90,
        image:
            "../../assets/img/productos/entrenamiento/polo-entrenamiento.jpg"
    },

    {
        id: 5,
        name: "Short Deportivo",
        category: "Entrenamiento",
        price: 99.90,
        image:
            "../../assets/img/productos/entrenamiento/short-entrenamiento.jpg"
    },

    {
        id: 6,
        name: "Gorro Deportivo",
        category: "Accesorios",
        price: 59.90,
        image:
            "../../assets/img/productos/accesorios/gorro.jpg"
    },

    {
        id: 7,
        name: "Bufanda",
        category: "Accesorios",
        price: 69.90,
        image:
            "../../assets/img/productos/accesorios/bufanda.jpg"
    },

    {
        id: 8,
        name: "Mochila",
        category: "Accesorios",
        price: 129.90,
        image:
            "../../assets/img/productos/accesorios/mochila.jpg"
    }

];


const grid =
    document.getElementById("product-grid");

const search =
    document.getElementById("search-product");

const sort =
    document.getElementById("sort-products");


function renderProducts(list) {

    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔎</div>
                <h2>No encontramos productos</h2>
                <p>
                    Prueba con otro término de búsqueda.
                </p>
            </div>
        `;

        return;

    }


    list.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image">

                <button
                    class="product-wishlist"
                    data-id="${product.id}"
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
                    class="btn btn-primary btn-full add-cart"
                    style="margin-top:15px;"
                    data-id="${product.id}"
                >
                    Agregar al carrito
                </button>

            </div>
        `;


        grid.appendChild(card);

    });


    document.querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                const product =
                    products.find(
                        item => item.id === id
                    );

                addToCart(product);

            });

        });


    document.querySelectorAll(".product-wishlist")
        .forEach(button => {

            button.addEventListener("click", () => {

                toggleFavorite(
                    Number(button.dataset.id)
                );

            });

        });

}


function filterProducts() {

    const term =
        search.value.toLowerCase().trim();


    let result =
        products.filter(product =>
            product.name
                .toLowerCase()
                .includes(term)
        );


    if (sort.value === "low") {

        result.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sort.value === "high") {

        result.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    renderProducts(result);

}


search.addEventListener(
    "input",
    filterProducts
);


sort.addEventListener(
    "change",
    filterProducts
);


renderProducts(products);