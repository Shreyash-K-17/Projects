const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function displayCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cartItems.forEach((item, index) => {
        total += item.price * item.quantity;
        cartContainer.innerHTML += `
            <div>
                ${item.name} - $${item.price} x ${item.quantity}
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    cartTotal.innerText = total;
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCart();
}

function checkout() {
    alert("Proceeding to checkout!");
    localStorage.removeItem("cart");
    window.location.href = "login.html";
}

displayCart();
