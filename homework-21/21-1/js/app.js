document
    .querySelector('#alert-btn')
    .addEventListener('click', () => {
        let alertMessage = document.querySelector('.alert');
        alertMessage
            .classList
            .toggle('alert-message');
    });
    document.addEventListener('DOMContentLoaded', function () {
      const tooltipTrigger = document.querySelector('[data-bs-toggle="tooltip"]');
      new bootstrap.Tooltip(tooltipTrigger);
    });