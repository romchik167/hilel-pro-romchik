let givenValue = +prompt('Вкажіть ваше число');
let lastNumber = givenValue % 10;

if(lastNumber % 2 === 0){
    alert('Ваше число закінчується на парне')
}
else{
    alert('Ваше число закінчується на непарне')
}

console.log(lastNumber);