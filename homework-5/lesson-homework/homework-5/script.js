let givenNum = 27;
let isPowerOfThree = false;

for(let i = 1; i ** 3 <= givenNum; i++){
    if(i ** 3 == givenNum){
        isPowerOfThree = true;
        break;
    }
}
if (isPowerOfThree) {
    document.write(`${givenNum} можна отримати як 3 у деякому степені`);
} else {
    document.write(`${givenNum} не можна отримати як 3 у будь-якому степені`);
}