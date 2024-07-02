// main.js

document.addEventListener('DOMContentLoaded', function() {
    const raftingForm = document.getElementById('raftingForm');

    raftingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get input values
        const raftQty = parseInt(document.getElementById('raft').value);
        const paddlesQty = parseInt(document.getElementById('paddles').value);
        const lifejacketQty = parseInt(document.getElementById('lifejacket').value);
        const waterShoesQty = parseInt(document.getElementById('waterShoes').value);
        const foodQty = parseInt(document.getElementById('food').value);

        // Calculate total cost
        const raftCost = 50 * raftQty;
        const paddlesCost = 10 * paddlesQty;
        const lifejacketCost = 15 * lifejacketQty;
        const waterShoesCost = 20 * waterShoesQty;
        const foodCost = 30 * foodQty;

        const totalAmount = raftCost + paddlesCost + lifejacketCost + waterShoesCost + foodCost;

        // Store totalAmount in session storage for retrieval in total.html
        sessionStorage.setItem('totalAmount', totalAmount);

        // Navigate to total.html
        window.location.href = 'total.html';
    });
});
