const timer = prompt('Введіть скільки секунд буде йти таймер');

let minutes = Math.floor(timer / 60);
let seconds = timer % 60;

let timerWrap = document.querySelector('.timer-wrap')
timerWrap.textContent = `${format(minutes)} : ${format(seconds)}`;
function format(num) {
    return num < 10 ? '0' + num : num;
}

function updateDisplay() {
    timerWrap.textContent = `${format(minutes)} : ${format(seconds)}`;
}

function timerFunc () { 
    if(seconds === 0){
        minutes --;
        seconds = 59;
    }else{
        seconds--;
    }
    if (minutes < 1 && seconds === 0){
    clearInterval(intervalId);
}
    updateDisplay();
}


updateDisplay();

let intervalId = setInterval(timerFunc, 1000);