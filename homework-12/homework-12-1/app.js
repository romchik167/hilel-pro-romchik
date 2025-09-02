let adressYouWant = '';

document
    .querySelector('.choose-your-adress')
    .addEventListener('click', function () {
        adressYouWant = prompt('Введіть вашу адрeсу тут');
    });

document
    .querySelector('.go-to-this-adress')
    .addEventListener('click', function () {
        location.href = adressYouWant;
    });
