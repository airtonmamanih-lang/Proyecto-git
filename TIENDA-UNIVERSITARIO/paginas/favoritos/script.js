const favoritesGrid =
    document.getElementById("favorites-grid");


const favoriteIds =
    getFavorites();


if (favoriteIds.length === 0) {

    favoritesGrid.innerHTML = `

        <div class="empty-state">

            <div class="empty-state-icon">
                ♡
            </div>

            <h2>
                Aún no tienes favoritos
            </h2>

            <p>
                Guarda productos que quieras
                revisar más tarde.
            </p>

            <a
                href="../productos/index.html"
                class="btn btn-primary"
            >
                Explorar productos
            </a>

        </div>

    `;

}