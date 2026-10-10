function displayProducts(products) {
    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach(function (product) {
        const productCard = document.createElement("article");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>

            <button class="details-button" data-id="${product.id}">
                View Details
            </button>

            <button class="favourite-button" data-id="${product.id}">
                ♡ Favourite
            </button>
        `;

        productList.appendChild(productCard);
    });
}


function displayCategories(products) {
    const categoryFilter = document.getElementById("categoryFilter");

    const categories = [];

    products.forEach(function (product) {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    });

    categories.forEach(function (category) {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);
    });
}


function showLoading() {
    document.getElementById("loadingMessage").hidden = false;
    document.getElementById("errorMessage").hidden = true;
    document.getElementById("emptyMessage").hidden = true;
}


function showError() {
    document.getElementById("loadingMessage").hidden = true;
    document.getElementById("errorMessage").hidden = false;
    document.getElementById("emptyMessage").hidden = true;
}


function showEmptyMessage() {
    document.getElementById("loadingMessage").hidden = true;
    document.getElementById("errorMessage").hidden = true;
    document.getElementById("emptyMessage").hidden = false;
}


function hideMessages() {
    document.getElementById("loadingMessage").hidden = true;
    document.getElementById("errorMessage").hidden = true;
    document.getElementById("emptyMessage").hidden = true;
}