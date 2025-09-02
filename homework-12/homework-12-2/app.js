let clickedBtn = '';
document
    .querySelector('.container')
    .addEventListener('click', function () {
        alert(`Було клікнуто по кнопці: ${clickedBtn}`)
    });

document
    .querySelector('.btn-1')
    .addEventListener('click', function () {
        clickedBtn = 1;
    });
document
    .querySelector('.btn-2')
    .addEventListener('click', function () {
        clickedBtn = 2;
    });
document
    .querySelector('.btn-3')
    .addEventListener('click', function () {
        clickedBtn = 3;
    });
