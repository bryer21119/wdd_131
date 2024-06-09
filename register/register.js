import { participantTemplate, successTemplate } from './Templates.js';

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    document.getElementById('addParticipant').addEventListener('click', () => {
        participantCount++;
        const newParticipantHtml = participantTemplate(participantCount);
        document.getElementById('addParticipant').insertAdjacentHTML('beforebegin', newParticipantHtml);
    });

    document.getElementById('registrationForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const totalFee = totalFees();
        const name = document.querySelector('#name1').value;
        const summaryHtml = successTemplate({ name, participantCount, totalFee });
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('summary').innerHTML = summaryHtml;
        document.getElementById('summary').style.display = 'block';
    });
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, feeElement) => total + parseFloat(feeElement.value || 0), 0);
}
