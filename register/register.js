// register.js
document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1; // Initial participant count

    const addParticipantButton = document.getElementById('addParticipant');
    const registrationForm = document.getElementById('registrationForm');
    const participantsFieldset = document.getElementById('participantsFieldset');
    const submitButton = document.getElementById('submitButton');

    // Function to add participant section
    function addParticipantSection() {
        participantCount++; // Increment participant count

        // Create new participant section
        const newParticipantSection = document.createElement('section');
        newParticipantSection.classList.add('participant');
        newParticipantSection.id = `participant${participantCount}`;

        // Update HTML for participant fields
        newParticipantSection.innerHTML = `
            <label for="name${participantCount}">Name:</label>
            <input type="text" id="name${participantCount}" name="name${participantCount}" required>
            <label for="fee${participantCount}">Fee:</label>
            <input type="number" id="fee${participantCount}" name="fee${participantCount}" step="0.01" min="0" required>
        `;

        // Append new participant section to fieldset
        participantsFieldset.appendChild(newParticipantSection);
    }

    // Event listener for Add Participant button
    addParticipantButton.addEventListener('click', addParticipantSection);

    // Event listener for form submission
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Gather form data
        const formData = new FormData(registrationForm);
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
