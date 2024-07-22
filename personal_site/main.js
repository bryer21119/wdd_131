import { calculateTotal, saveToLocalStorage } from './utils.js';

document.addEventListener('DOMContentLoaded', function() {
    const raftingForm = document.getElementById('raftingForm');

    raftingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get input values
        const raftQty = parseInt(document.getElementById('raft').value) || 0;
        const paddlesQty = parseInt(document.getElementById('paddles').value) || 0;
        const lifejacketQty = parseInt(document.getElementById('lifejacket').value) || 0;
        const waterShoesQty = parseInt(document.getElementById('waterShoes').value) || 0;
        const foodQty = parseInt(document.getElementById('food').value) || 0;

        const data = {
            raft: raftQty,
            paddles: paddlesQty,
            lifejacket: lifejacketQty,
            waterShoes: waterShoesQty,
            food: foodQty
        };

        // Calculate total cost
        const totalAmount = calculateTotal(data);

        // Save to local storage
        saveToLocalStorage(data, totalAmount);

        // Navigate to total.html
        window.location.href = 'total.html';
    });
});
