// summary.js
document.addEventListener('DOMContentLoaded', () => {
    const registrationData = JSON.parse(sessionStorage.getItem('registrationData'));

    if (registrationData) {
        const { totalFee, participants } = registrationData;

        // Display total fee
        const summaryElement = document.getElementById('summary');
        const totalFeeElement = document.createElement('p');
        totalFeeElement.textContent = `Total Fee: $${totalFee.toFixed(2)}`;
        summaryElement.appendChild(totalFeeElement);

        // Display participants
        participants.forEach((participant, index) => {
            const participantElement = document.createElement('div');
            participantElement.classList.add('participant');
            participantElement.innerHTML = `
                <p><span>Name:</span> ${participant.name}</p>
                <p><span>Fee:</span> $${participant.fee.toFixed(2)}</p>
            `;
            summaryElement.appendChild(participantElement);
        });
    } else {
        // If no registration data found
        const summaryElement = document.getElementById('summary');
        const errorElement = document.createElement('p');
        errorElement.textContent = 'No registration data found.';
        summaryElement.appendChild(errorElement);
    }
});
