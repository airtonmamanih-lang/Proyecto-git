const product = {

    id: 1,

    name: "Camiseta Local",

    category: "Camisetas",

    price: 199.90,

    image:
        "../../assets/img/productos/camisetas/camiseta-local.jpg"

};


const sizeButtons =
    document.querySelectorAll(".size-option");


sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        sizeButtons.forEach(
            item =>
                item.classList.remove("selected")
        );

        button.classList.add("selected");

    });

});


document
    .getElementById("add-product")
    .addEventListener("click", () => {

        addToCart(product);

    });