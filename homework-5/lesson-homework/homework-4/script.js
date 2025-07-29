let givenNum = 8;
let isPrime = true;

if (givenNum <= 1) {
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