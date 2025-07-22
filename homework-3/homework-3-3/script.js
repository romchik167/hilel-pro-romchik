let myValue = 47859;

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


console.log(d1, d2, d3, d4, d5)