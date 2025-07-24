let givenNumber = +prompt('Введіть ваше тризначнне число')

let firstNumber = Math.floor(givenNumber % 1000 / 100);
let secondNumber = Math.floor(givenNumber % 100 / 10);
let thirdNumber = Math.floor(givenNumber % 10);

let summ = Math.floor(firstNumber + secondNumber + thirdNumber);
let multiplication = Math.floor(firstNumber * secondNumber * thirdNumber);

//a
if(summ === 0){
    alert('Сума чисел у вашому числі дорівнює 0')
}
else if(summ % 2 === 0){
    alert('Сума числ у вашому числі парне')
}
else {
    alert('Сума числ у вашому числі не парне')
}

//b
if(summ % 5 === 0){
    alert('Сума числ у вашому числі кратне 5')
}
else {
    alert('Сума числ у вашому числі не кратне 5')
}

//c
if(multiplication > 100){
    alert('Добуток чисел у вашому числі більше 100')
}
else if(multiplication < 100){
    alert('Добуток чисел у вашому числі менше 100')
}
else{
    alert('Добуток чисел у вашому числі дорівнює нулю')
}

//d
if(firstNumber === secondNumber === thirdNumber){
    alert('Всі числа у вашому числі однакові')
}
else{
    alert('Всі числа у вашому числі не є однаковими')
}

//e
if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
    alert('Серед чисел є дві однакові');
} else {
    alert('Всі числа різні');
}