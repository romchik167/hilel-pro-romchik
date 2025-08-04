let dollor = 42;
for(let i = 10; i <= 100; i += 10){
    let value = dollor * i;
    document.write(value)
    if (i < 100) {
        document.write(", ");
    }
}