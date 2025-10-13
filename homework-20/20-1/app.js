document
       .querySelector('#alert-btn')
    .addEventListener('click', () => {
        let alertMessage = document.querySelector('.alert');
        alertMessage.classList.toggle('alert-message');
    });