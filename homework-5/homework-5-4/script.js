let givenNum = +prompt('Введіть просте число');
let isPrime = true;
if (!Number.isInteger(givenNum)) {
    document.write("Введіть коректне ціле число.");
}else if (givenNum <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(givenNum); i++) {
        if (givenNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    document.write(`${givenNum} є простим числом`);
} else {
    document.write(`${givenNum} не є простим числом`);
}