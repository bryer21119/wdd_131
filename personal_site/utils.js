// Utility functions for handling local storage

// Calculate total cost based on input data
export function calculateTotal(data) {
    const raftCost = data.raft * 50;
    const paddlesCost = data.paddles * 10;
    const lifejacketCost = data.lifejacket * 15;
    const waterShoesCost = data.waterShoes * 20;
    const foodCost = data.food * 30;

    const total = raftCost + paddlesCost + lifejacketCost + waterShoesCost + foodCost;
    return total;
}

// Save data to local storage
export function saveToLocalStorage(data, total) {
    localStorage.setItem('raftingData', JSON.stringify({ data, total }));
}

// Retrieve data from local storage
export function getFromLocalStorage() {
    const raftingData = JSON.parse(localStorage.getItem('raftingData'));
    return raftingData || { total: 0 };
}
