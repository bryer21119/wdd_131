// register.js
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

    // Event listener for form submission
    document.getElementById('registrationForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        
        // Gather form data
        const formData = new FormData(event.target);
        const participants = [];
        
        // Extract participant data
        for (let i = 1; i <= participantCount; i++) {
            const name = formData.get(`name${i}`);
            const fee = parseFloat(formData.get(`fee${i}`) || 0);
            participants.push({ name, fee });
        }
        
        // Calculate total fee
        const totalFee = participants.reduce((total, participant) => total + participant.fee, 0);

        // Store data in sessionStorage for retrieval on summary page
        sessionStorage.setItem('registrationData', JSON.stringify({ totalFee, participants }));

        // Redirect to summary page
        window.location.href = './summary.html';
    });
});

// Function to remove participant section
window.removeParticipant = function(button) {
    button.parentNode.remove();
};
