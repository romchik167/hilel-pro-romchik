'use strict'
const ordersCount = orders.reduce((acc, order) => {
    const user = order.user;
    acc[user] = (acc[user] || 0) + 1;
    return acc;
});
console.log(ordersCount);

const ordersCountMap = orders.reduce((map, order) => {
    const user = order.user;
    if (map.has(user)) {
        map.set(user, map.get(user) + 1);
    } else {
        map.set(user, 1);
    }

    return map;
}, new Map());
console.log(ordersCountMap);