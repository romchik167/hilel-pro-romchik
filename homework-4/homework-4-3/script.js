let birthYear = +prompt('Вкажіть ваш рік народження цифрами');
let city = prompt('Вкажіть в якому місті ви живете');
let sport = prompt('Вкажіть ваш улюблений вид спорту, якщо він є');

let age = Math.floor(2025 - birthYear)

let cityMessage = '';
if (city) {
    switch (city.trim().toLowerCase()) {
        case 'київ':
            cityMessage = 'Ти живеш у столиці України!';
            break;
        case 'вашингтон':
            cityMessage = 'Ти живеш у столиці США!';
            break;
        case 'лондон':
            cityMessage = 'Ти живеш у столиці Великої Британії!';
            break;
        default:
            cityMessage = `Ти живеш у місті ${city}!`;
    }
} else {
    cityMessage = 'Шкода, що Ви не захотіли ввести місто.';
}

let sportMassage = '';
if(sport){
    switch(sport.trim().toLowerCase()){
        case 'футбол': 
            sportMassage = 'О ти хочеш стати як Роналду?'
            break;
        case 'баскетбол': 
            sportMassage = 'О ти хочеш стати як Майкл Джордан?'
            break;
        case 'волейбол': 
            sportMassage = 'О ти хочеш стати як Роналду?'
            break;
        default:
            sportMassage = `ОО круто що ти займаєшся таким спортом як ${sport}`;
                  
    }
}else{
    sportMassage = 'Шкода що ви не захотіли вказувати ваш спорт'
}
alert(`Ваш вік: ${age} років,\n${cityMessage}\n${sportMassage}`)