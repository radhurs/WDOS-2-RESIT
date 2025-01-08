document.getElementById('billing-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const country = document.getElementById('country').value;
    const street = document.getElementById('street-address').value;
    const city = document.getElementById('city').value;
    const postcode = document.getElementById('postcode').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked')?.value;

    if (firstName && lastName && country && street && city && postcode && phone && email && paymentMethod) {
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 7);
        const message = `Thank you for your purchase! Your order will be delivered on ${deliveryDate.toLocaleDateString()}`;
        document.getElementById('thank-you-message').innerText = message;
    } else {
        alert('Please fill in all fields');
    }
});



