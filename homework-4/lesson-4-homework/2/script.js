let firstDistant = +prompt('Введіть першу ведстань у кілометрах')
let secondDistant = +prompt('Введіть другу відстань у футах')

let firstDistantInMeter = firstDistant * 1000;
let secondDistantInMeter = secondDistant * 0.305;

if (firstDistantInMeter > secondDistantInMeter){
    alert('Перша відстань більша ніж друга')
}
else if (firstDistantInMeter < secondDistantInMeter){
    alert('Друга відстань більша ніж перша')
}
else{
    alert('Ваші відстані однакові')
}
