function sum(a, b){
    return function(b){
       return a + b; 
    }
}
console.log(sum(1)(2));
console.log(sum(5)(10));


function minus(a, b){
    return function(b){
       return a - b; 
    }
}
console.log(minus(11)(2));
console.log(minus(15)(10));