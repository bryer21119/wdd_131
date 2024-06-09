export function participantTemplate(count) {
    return `
        <section class="participant${count}" id="participant${count}">
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}">
            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" name="fee${count}">
        </section>
    `;
}

export function successTemplate({ name, participantCount, totalFee }) {
    return `
        <p>Thank you ${name} for registering. You have registered ${participantCount} participants and owe $${totalFee} in Fees.</p>
    `;
}
