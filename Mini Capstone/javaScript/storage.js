function getFavourites() {
    const favourites = localStorage.getItem("styleFindFavourites");

    return favourites ? JSON.parse(favourites) : [];
}

function saveFavourites(favourites) {
    localStorage.setItem(
        "styleFindFavourites",
        JSON.stringify(favourites)
    );
}