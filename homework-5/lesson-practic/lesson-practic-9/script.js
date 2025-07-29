let givenNum = 50;
let countNum = 0;
for(let i = 0;i <= givenNum; i++){
    if(givenNum % i == 0){
        document.write(i);
    if (i < givenNum) {
        document.write(", ");
    }
    }
}

document.write(`<br>`);

for(let i = 0;i <= givenNum; i++){
    if(givenNum % i == 0 && i % 2 == 0){
        document.write(i); 
        countNum++;
    if (i < givenNum) {
        document.write(", ");
    }
    }
}

document.write(`<br>`);

document.write(countNum);