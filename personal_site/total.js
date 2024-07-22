import { getFromLocalStorage } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    const { data, total } = getFromLocalStorage();

    if (data) {
        const prices = {
            raft: 50,
            paddles: 10,
            lifejacket: 20,
            waterShoes: 15,
            food: 5
        };

        let summaryHtml = "<ul>";

        Object.keys(data).forEach(item => {
            const quantity = data[item];
            const itemTotal = quantity * prices[item];

            summaryHtml += `<li>${item.charAt(0).toUpperCase() + item.slice(1)}: ${quantity} x $${prices[item]} = $${itemTotal}</li>`;
        });

        summaryHtml += `</ul><h3>Grand Total: $${total}</h3>`;

        document.getElementById("totalSummary").innerHTML = summaryHtml;
    } else {
        document.getElementById("totalSummary").innerHTML = "<p>No items selected.</p>";
    }
});
