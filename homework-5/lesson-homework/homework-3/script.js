let n = 100;
for(let i = 1; i<=100; i++){
    if(i ** 2 < n){
        document.write(i * i);
    }
    if (i < 100 && i ** 2 < n) {
        document.write(", ");
    }
}