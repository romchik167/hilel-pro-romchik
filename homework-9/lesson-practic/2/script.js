'use strict'
const totalUser = orders.reduce((acc, order) => {
    const totalOrder = order.items.reduce((sum, item) => sum + item.price, 0);
    acc[order.user] = (acc[order.user] || 0) + totalOrder;
    return acc;
}, {});
console.log(totalUser);

const totalUserMap = orders.reduce((map, order) => {
    const totalOrderMap = order.items.reduce((sum, item) => sum + item.price, 0);
        if(map.has(order.user)){
            map.set(order.user, map.get(order.user) + totalOrderMap)
        }else{
            map.set(order.user, totalOrderMap)
        }
        return map;
}, new Map());
console.log(totalUserMap);