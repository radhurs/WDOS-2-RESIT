let cart = [];

function addToCart(productName, price) {
    
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart',JSON.stringify(cart));
    alert(`${productName} added to cart.`);
}


function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart); // Retrieve cart from localStorage
        displayCart();
    }
}


function displayCart() {
    let cartTable = "<table><tr><th>Product</th><th>Price</th></tr>";
    cart.forEach(item => {
        cartTable += `<tr><td>${item.name}</td><td>$${item.price}</td></tr>`;
    });
    cartTable += "</table>";
    document.getElementById("view-cart").innerHTML = cartTable;
}

// Load the cart when the cart page is loaded
if (window.location.pathname.includes('cart.html')) {
    loadCart();
}





