const registerForm =
    document.getElementById("register-form");


registerForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const password =
            registerForm.querySelector(
                'input[type="password"]'
            ).value;


        const confirmation =
            document.getElementById(
                "password-confirm"
            ).value;


        if (password !== confirmation) {

            showToast(
                "Las contraseñas no coinciden."
            );

            return;

        }


        showToast(
            "Cuenta creada correctamente."
        );


        setTimeout(() => {

            window.location.href =
                "../login/index.html";

        }, 1200);

    }
);