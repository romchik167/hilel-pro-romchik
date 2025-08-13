for(let i = 0; i <= 10;i++){
    let promptValue = +prompt('Введіть число більше ніж 100')
    if(promptValue > 100){
        break;
    }
    if(promptValue < 100){
        alert('Введіть число більше 100')
    }
    if(isNaN(promptValue)){
        alert('Введіть корректне число')
    }
}