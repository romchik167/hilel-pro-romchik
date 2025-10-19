import { Tooltip } from 'bootstrap';
document
    .querySelector('#alert-btn')
    .addEventListener('click', () => {
        let alertMessage = document.querySelector('.alert');
        alertMessage
            .classList
            .toggle('alert-message');
    });


document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(el => new Tooltip(el));

  const alertBtn = document.getElementById('alert-btn');
  const alertMessage = document.querySelector('.alert-message');
  if (alertBtn && alertMessage) {
    alertBtn.addEventListener('click', () => {
      alertMessage.classList.toggle('d-none');
    });
  }
});