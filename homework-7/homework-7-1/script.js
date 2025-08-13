function createSum(){
    let value = 0;
    return function(num){
        value += num;
        return value;
    }   
}
const sum = createSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7)); 