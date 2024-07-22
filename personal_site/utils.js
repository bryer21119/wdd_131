// Calculate total cost based on input data
export function calculateTotal(data) {
    const raftCost = data.raft * 50;
    const paddlesCost = data.paddles * 10;
    const lifejacketCost = data.lifejacket * 20;
    const waterShoesCost = data.waterShoes * 15;
    const foodCost = data.food * 5;

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
    return raftingData || { data: null, total: 0 };
}
