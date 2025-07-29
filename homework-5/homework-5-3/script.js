let n = prompt('Введіть будь ласка ціле число');
for(let i = 1; i <= n; i++){
    if(i ** 2 < n){
        document.write(i);
    }
    if (i++ < n && i ** 2 < n) {
        document.write(", ");
    }
}