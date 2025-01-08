let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    let table = document.getElementById("cart-table");
    table.innerHTML = "<tr><th>Product</th><th>Image</th><th>Price</th><th>Quantity</th><th>Subtotal</th><th>Remove</th></tr>";

    let total = 0;

    cart.forEach((item, index) => {
        let subtotal = item.price * item.quantity;
        total += subtotal;
        let row = `<tr>
            <td>${item.name}</td>
            <td><img src="${item.image}" alt="${item.name}" class="order-form"></td>
            <td>Rs${item.price}</td>
            <td><input type="number" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)"></td>
            <td>Rs${subtotal}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        </tr>`;
        table.innerHTML += row;
    });

    document.getElementById("cart-total").innerText = `Cart Total: Rs${total}`;
}

function updateQuantity(index, quantity) {
    cart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function addToFavorites() {
    localStorage.setItem('favorites', JSON.stringify(cart));
    alert('Items saved to favorites');
}

function applyFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    cart = favorites;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function checkout() {
    alert('Proceeding to Checkout');
    // Add checkout logic here
}

updateCart();

