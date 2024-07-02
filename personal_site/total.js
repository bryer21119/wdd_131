// total.js

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve quantities from session storage and convert them to integers
    const raftQty = parseInt(sessionStorage.getItem('raftQty')) || 0;
    const paddlesQty = parseInt(sessionStorage.getItem('paddlesQty')) || 0;
    const lifejacketQty = parseInt(sessionStorage.getItem('lifejacketQty')) || 0;
    const waterShoesQty = parseInt(sessionStorage.getItem('waterShoesQty')) || 0;
    const foodQty = parseInt(sessionStorage.getItem('foodQty')) || 0;

    // Define prices for each item
    const raftPrice = 50;
    const paddlesPrice = 10;
    const lifejacketPrice = 15;
    const waterShoesPrice = 20;
    const foodPrice = 30;

    // Calculate total cost for each item
    const raftCost = raftPrice * raftQty;
    const paddlesCost = paddlesPrice * paddlesQty;
    const lifejacketCost = lifejacketPrice * lifejacketQty;
    const waterShoesCost = waterShoesPrice * waterShoesQty;
    const foodCost = foodPrice * foodQty;

    // Calculate grand total
    const grandTotal = raftCost + paddlesCost + lifejacketCost + waterShoesCost + foodCost;

    // Display total amounts on the page
    const totalSummary = document.getElementById('totalSummary');
    totalSummary.innerHTML = `
        <div class="total-summary-box">
            <p>Total Amount: $${grandTotal}</p>
            <ul>
                <li>Rafts (${raftQty} @ $${raftPrice} each): $${raftCost}</li>
                <li>Paddles (${paddlesQty} @ $${paddlesPrice} each): $${paddlesCost}</li>
                <li>Lifejackets (${lifejacketQty} @ $${lifejacketPrice} each): $${lifejacketCost}</li>
                <li>Water Shoes (${waterShoesQty} @ $${waterShoesPrice} each): $${waterShoesCost}</li>
                <li>Food (${foodQty} @ $${foodPrice} each): $${foodCost}</li>
            </ul>
        </div>
    `;
});
