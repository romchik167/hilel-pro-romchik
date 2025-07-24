let myValue = +prompt('Введіть ваше трьохзначне число')

let d3 = (myValue % 10);
myValue = (myValue - d3)
myValue = (myValue / 10)

let d2 = (myValue % 10);
myValue = (myValue - d2)
myValue = (myValue / 10)

let d1 = (myValue % 10);
myValue = (myValue - d1)
myValue = (myValue / 10)

if (d1 === d2 && d2 === d3 && d1 === d3) {
    alert('Всі числа однакові');
}

if (d1 === d2 || d2 === d3 || d1 === d3) {
    alert('Серед чисел є дві однакові');
} else {
    alert('Всі числа різні');
}
