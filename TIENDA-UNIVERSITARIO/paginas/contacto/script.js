const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        showToast(
            "Mensaje enviado correctamente."
        );


        contactForm.reset();

    }
);