document
    .querySelector('#alert-btn')
    .addEventListener('click', () => {
        let alertMessage = document.querySelector('.alert');
        alertMessage
            .classList
            .toggle('alert-message');
    });
document
    .querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(el => {
        new bootstrap.Tooltip(el);
    });