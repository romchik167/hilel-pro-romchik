const items = [
  { name: "apple", quantity: 2, price: 30 },
  { name: "banana", quantity: 5, price: 10 },
  { name: "orange", quantity: 3, price: 20 },
];

const itemsAllArr = items.map(items =>{
    return{
        name: items.name,
        quantity: items.quantity,
        price: items.price,
        total: items.quantity * items.price,
    }    
});
console.log(itemsAllArr);

const total = itemsAllArr.reduce((sum, item) => sum + item.total, 0)
console.log(total);


// 1. С помощью map создать новый массив, где к каждому товару добавлено поле total = quantity * price.
// 2. С помощью reduce найти общую стоимость всех товаров.