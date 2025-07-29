for (let i = 100; i <= 300; i++){
    if(i % 3 == 0){
        document.write(i);
    }
    if (i < 300 && i > 100 && i % 3 == 0) {
        document.write(", ");
    }
}
