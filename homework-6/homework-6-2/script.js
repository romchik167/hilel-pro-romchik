let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
document.write(`Дано масив: ${arr}`)

let summPositive = 0;
let amountPositive = 0;
let prodactPossitive = 1;
let smallestEl = arr[0];
let smallestElIndex = 0;
let biggestEl = arr[0];
let biggestElIndex = 0;
let amountNegative = 0;
let amountOdd = 0;
let summEven = 0;
let summOdd = 0;
let amountEven = 0;
let differentNegative = 0;



for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        summPositive += arr[i];
        amountPositive++;
    }
    if(arr[i] < smallestEl){
        smallestEl = arr[i]
        smallestElIndex = i
    }
    if(arr[i] > biggestEl){
        biggestEl = arr[i]
        biggestElIndex = i
    }
    if(arr[i] < 0){
        differentNegative += arr[i];
        amountNegative++;
    }
    if(arr[i] % 2 !== 0){
        amountOdd += 1
    }
    if(arr[i] % 2 === 0){
        amountEven += 1
    }
    if(arr[i] % 2 === 0){
        summEven += arr[i]
    }
    if(arr[i] % 2 !== 0){
        summOdd += arr[i]
    }
    if(arr[i] > 0){
        prodactPossitive *= arr[i]
    }
    if(i !== biggestElIndex){
        arr[i] = 0;
    }
}
document.write(`<br>A<br>`);

document.write(`Сума всіх додатніх елементів масиву: ${summPositive} <br> кількість додатніх елементів: ${amountPositive}`);

document.write(`<br>B<br>`);

document.write(`${smallestEl} найменший елемент масиву, його індекс: ${smallestElIndex}`);

document.write(`<br>B<br>`);

document.write(`${biggestEl} найбільший елемент масиву, його індекс: ${biggestElIndex}`);

document.write(`<br>D<br>`);

document.write(`Різниця всіх від'ємних елементів масиву: ${differentNegative} <br> кількість від'ємних елементів: ${amountNegative}`);

document.write(`<br>E<br>`);

document.write(`Кількість непарних елементів у масиві = ${amountOdd}`)

document.write(`<br>F<br>`);

document.write(`Кількість парних елементів у масиві = ${amountEven}`)

document.write(`<br>G<br>`);

document.write(`Сума парних елементів у масиві = ${summEven}`)

document.write(`<br>H<br>`);

document.write(`Різниця непарних елементів у масиві = ${summOdd}`)

document.write(`<br>I<br>`);

document.write(`Добуток всіх додатніх елементів масиву = ${prodactPossitive}`)

document.write(`<br>J<br>`);

document.write(arr);