// register.js
document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1; // Initial participant count

    const addParticipantButton = document.getElementById('addParticipant');
    const participantsFieldset = document.getElementById('participantsFieldset');

    addParticipantButton.addEventListener('click', () => {
        participantCount++; // Increment participant count

        // Create a new participant section
        const newParticipantSection = document.createElement('section');
        newParticipantSection.classList.add('participant');
        newParticipantSection.id = `participant${participantCount}`;

        // Update HTML for participant fields (adjust as per your form structure)
        newParticipantSection.innerHTML = `
            <!-- Participant input fields -->
            <label for="name${participantCount}">Name:</label>
            <input type="text" id="name${participantCount}" name="name${participantCount}" required>
            <label for="fee${participantCount}">Fee:</label>
            <input type="number" id="fee${participantCount}" name="fee${participantCount}" step="0.01" min="0" required>
        `;

        // Append new participant section to fieldset
        participantsFieldset.appendChild(newParticipantSection);
    });

    // Additional logic for form submission (already discussed earlier)
    document.getElementById('registrationForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Gather form data, calculate total fee, store in sessionStorage, redirect to summary.html
        // Add this logic as per the previous instructions provided
    });
});
