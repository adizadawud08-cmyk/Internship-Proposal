let allProducts = [];
let filteredProducts = [];


async function loadProducts() {
    showLoading();

    try {
        allProducts = await getProducts();

        filteredProducts = [...allProducts];

        displayCategories(allProducts);
        displayProducts(filteredProducts);

        hideMessages();

        displayFavourites();
    } catch (error) {
        console.error(error);
        showError();
    }
}


loadProducts();

document.getElementById("retryButton").addEventListener("click", loadProducts);

function displayFavourites() {
    const favouritesList = document.getElementById("favouritesList");
    const favourites = getFavourites();

    favouritesList.innerHTML = "";

    if (favourites.length === 0) {
        favouritesList.innerHTML = "<p>No favourites yet.</p>";
        return;
    }

    favourites.forEach(function (product) {
        const favouriteItem = document.createElement("div");

        favouriteItem.innerHTML = `
            <p>${product.title} - $${product.price}</p>
            <button class="remove-favourite" data-id="${product.id}">
                Remove
            </button>
        `;

        favouritesList.appendChild(favouriteItem);
    });
}


function addToFavourites(productId) {
    const favourites = getFavourites();

    const product = allProducts.find(function (item) {
        return item.id === productId;
    });

    if (!product) {
        return;
    }

    const alreadyFavourite = favourites.some(function (item) {
        return item.id === productId;
    });

    if (!alreadyFavourite) {
        favourites.push(product);
        saveFavourites(favourites);
        displayFavourites();
    }
}


function removeFromFavourites(productId) {
    const favourites = getFavourites();

    const updatedFavourites = favourites.filter(function (item) {
        return item.id !== productId;
    });

    saveFavourites(updatedFavourites);
    displayFavourites();
}

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("favourite-button")) {
        const productId = Number(event.target.dataset.id);

        addToFavourites(productId);
    }


    if (event.target.classList.contains("remove-favourite")) {
        const productId = Number(event.target.dataset.id);

        removeFromFavourites(productId);
    }

    if (event.target.classList.contains("details-button")) {
    const productId = Number(event.target.dataset.id);

    showProductDetails(productId);
}
});

function updateProducts() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const selectedCategory = document.getElementById("categoryFilter").value;
    const selectedSort = document.getElementById("priceSort").value;

    filteredProducts = allProducts.filter(function (product) {

        const matchesSearch = product.title.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

  
    if (selectedSort === "low-high") {
    filteredProducts.sort(function (a, b) {
        return a.price - b.price;
    });
}

if (selectedSort === "high-low") {
    filteredProducts.sort(function (a, b) {
        return b.price - a.price;
    });
}

    if (filteredProducts.length === 0) {
        showEmptyMessage();
        displayProducts([]);
    } else {
        hideMessages();
        displayProducts(filteredProducts);
    }
}

  // Listen for changes to search, category, and price sorting
document.getElementById("searchInput").addEventListener("input", updateProducts);

document.getElementById("categoryFilter").addEventListener("change", updateProducts);

document.getElementById("priceSort").addEventListener("change", updateProducts);

// Product details
function showProductDetails(productId) {
    const product = allProducts.find(function (item) {
        return item.id === productId;
    });

    if (!product) {
        return;
    }

    const productDetails = document.getElementById("productDetails");
    const productModal = document.getElementById("productModal");

    productDetails.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p>${product.description}</p>
    `;

    productModal.hidden = false;
}

// Close product details
document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("productModal").hidden = true;
});