let yourValue = +prompt('Введіть ваше двозначне число')

let firstNumber = yourValue % 100 / 10;
let secondNumber = yourValue % 10;

if(firstNumber > secondNumber){
    alert('У вашому числі: перше число більше аніж друге')
}
else if(firstNumber < secondNumber){
    alert('Друге число більше аніж перше')
}
else{
    alert('Ваші числа однакові')
}