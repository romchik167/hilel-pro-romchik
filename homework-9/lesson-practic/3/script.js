'use strict'
const productMap = new Map();
productMap.set("all", []);

for(const order of orders){
    for(const product of order.items){
        productMap.get("all").push(product.name)
    }
}
console.log(productMap);

const uniqueOrder = new Set(productMap.get("all"));
console.log(uniqueOrder);
