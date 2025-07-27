let myValue = +prompt('Введіть ваше шестизначне число');

let d6 = (myValue % 10);
myValue = (myValue - d6)
myValue = (myValue / 10)

let d5 = (myValue % 10);
myValue = (myValue - d5)
myValue = (myValue / 10)

let d4 = (myValue % 10);
myValue = (myValue - d4)
myValue = (myValue / 10)

let d3 = (myValue % 10);
myValue = (myValue - d3)
myValue = (myValue / 10)

let d2 = (myValue % 10);
myValue = (myValue - d2)
myValue = (myValue / 10)

let d1 = (myValue % 10);
myValue = (myValue - d1)
myValue = (myValue / 10)

if( d1 === d6 && d2 === d5 && d3 === d4){
    alert('Ваше число дзеркальне')
}
else{
    alert('Ваше число не є дзеркальним')
}
