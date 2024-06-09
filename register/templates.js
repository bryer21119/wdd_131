export function participantTemplate(count) {
    return `
        <section class="participant-section">
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}" required>
            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" name="fee${count}" required>
        </section>
    `;
}
