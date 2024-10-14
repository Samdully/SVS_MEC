document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
​
    const itemSelect = document.getElementById('item');
    const quantityInput = document.getElementById('quantity');
    const expirationDateInput = document.getElementById('expirationDate');
    const hospitalSelect = document.getElementById('hospital');
​
    const selectedItem = itemSelect.options[itemSelect.selectedIndex];
    const quantity = quantityInput.value;
    const expirationDate = expirationDateInput.value;
    const selectedHospital = hospitalSelect.value;
​
    const price = selectedItem.getAttribute('data-price');
    const totalPrice = price * quantity;
​
    document.getElementById('summaryText').innerText = `
        Item: ${selectedItem.value} 
        Quantity: ${quantity} 
        Expiration Date: ${expirationDate} 
        Hospital: ${selectedHospital}
    `;
    document.getElementById('totalPriceText').innerText = `Total Price: $${totalPrice}`;
​
    // Show the thank you message
    document.getElementById('thankYou').classList.remove('hidden');
​
    // Clear the form
    document.getElementById('orderForm').reset();
});
​