// let clickedBtn = '';

// document
//     .querySelector('.container')
//     .addEventListener('click', function () {
//         alert(`Було клікнуто по кнопці: ${clickedBtn}`)
//     });

// document
//     .querySelector('.btn-1')
//     .addEventListener('click', function () {
//         clickedBtn = 1;
//     });
// document
//     .querySelector('.btn-2')
//     .addEventListener('click', function () {
//         clickedBtn = 2;
//     });
// document
//     .querySelector('.btn-3')
//     .addEventListener('click', function () {
//         clickedBtn = 3;
//     });
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
btn.addEventListener('click', function(){
    const message = btn.dataset.message;
    alert(`Біло натиснуто кнопку №${message}`)
})
})

