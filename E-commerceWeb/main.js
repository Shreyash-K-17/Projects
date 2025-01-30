// Sample Product Data
const products = [
    { id: 1, name: "Laptop A", price: 1000, category: "Laptops", image: "img/img1.jpeg" },
    { id: 2, name: "Phone B", price: 500, category: "Mobile Phones", image: "img/img4.png" }
];

const productList = document.getElementById("product-list");
const sort = document.getElementById("sort");

// Function to Display Products
function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <a href="product.html?id=${product.id}">View Details</a>
            </div>
        `;
    });
}

// Sorting Logic
sort.addEventListener("change", () => {
    const sortedProducts = [...products];
    if (sort.value === "low") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts);
});

// Initial Display
displayProducts(products);
