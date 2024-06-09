import { participantTemplate } from './Templates.js';

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1; // Start with 1 participant initially

    // Event listener for the "Add Participant" button
    document.getElementById('addParticipant').addEventListener('click', () => {
        participantCount++;
        const newParticipantHtml = participantTemplate(participantCount);
        const addButton = document.getElementById('addParticipant');
        addButton.insertAdjacentHTML('beforebegin', newParticipantHtml);
    });

    // Form submission handling
    document.getElementById('registrationForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const totalFee = totalFees();
        const participants = gatherParticipantData();

        // Store data in sessionStorage for retrieval on summary page
        sessionStorage.setItem('registrationData', JSON.stringify({ totalFee, participants }));

        // Redirect to summary page
        window.location.href = 'summary.html';
    });
});

// Function to gather participant data from the form
function gatherParticipantData() {
    const participants = [];
    const participantSections = document.querySelectorAll('.participant-section');
    participantSections.forEach(section => {
        const name = section.querySelector('input[type="text"]').value;
        const fee = parseFloat(section.querySelector('input[type="number"]').value || 0);
        participants.push({ name, fee });
    });
    return participants;
}

// Function to calculate total fees from all participants
function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, feeElement) => total + parseFloat(feeElement.value || 0), 0);
}

// Function to remove participant section
window.removeParticipant = function(button) {
    button.parentNode.remove();
};
