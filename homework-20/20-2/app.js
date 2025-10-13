console.log(moment("20090720", "YYYYMMDD"))
let userDate = prompt('Введіть дату в форматі ДДММРРРР')
const regex = /^\d{8}$/
if (regex.test(userDate)){
    console.log(moment(`${userDate}`, 'DDMMYYYY').format('ll'))
} else {
    let alertMessage = document.querySelector('.alert-message');
    alertMessage.classList.remove('hide')
}
