let valueLenghth = prompt("Введіть довжину масиву");
let arr = [];
for(let i = 0; i < valueLenghth; i++){
    let digit =  +prompt(`Введіть число масива №${i + 1}`)
    arr.push(digit);
}
document.write(arr);

document.write(`<br>`)

arr.sort((a, b) => a - b);

document.write(arr);

document.write(`<br>`)

let slicedArr = arr.slice(2, 5);
document.write(slicedArr);
