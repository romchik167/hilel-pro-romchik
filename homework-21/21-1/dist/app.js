"use strict";

document.querySelector('#alert-btn').addEventListener('click', function () {
  var alertMessage = document.querySelector('.alert');
  alertMessage.classList.toggle('alert-message');
});
document.addEventListener('DOMContentLoaded', function () {
  var tooltipTrigger = document.querySelector('[data-bs-toggle="tooltip"]');
  new bootstrap.Tooltip(tooltipTrigger);
});