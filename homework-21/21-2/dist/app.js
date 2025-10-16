"use strict";

var myDate = 20090720;
console.log(moment(myDate, "YYYYMMDD"));
var userDate = prompt('Введіть дату в форматі ДДММРРРР');
var regex = /^\d{8}$/;
if (regex.test(userDate)) {
  console.log(moment("".concat(userDate), 'DDMMYYYY').format('ll'));
} else {
  var alertMessage = document.querySelector('.alert-message');
  alertMessage.classList.remove('hide');
}