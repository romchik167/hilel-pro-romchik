'use strict'
const totalUser = orders.reduce((acc, order) => {
    const totalOrder = order.items.reduce((sum, item) => sum + item.price, 0);
    acc[order.user] = (acc[order.user] || 0) + totalOrder;
    return acc;
}, {});

let maxUser = null;
let maxAmount = -Infinity;

for(const user in totalUser){
if(totalUser[user] > maxAmount){
    maxAmount = totalUser[user];
    maxUser = user;
}
}

console.log(`${maxUser} витратив найбільше: ${maxAmount}`);