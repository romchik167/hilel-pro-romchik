for(let givenNum = 1;givenNum <= 10; givenNum++){
    for(let i = 1;i <= 10;i++){
    let result = Math.floor(givenNum * i)
    document.write(` ${i} * ${givenNum} = ${result}`)
    if (i < 10) {
        document.write("; ");
    }
    if(i === 10){
        document.write`<br><br>`
    }
}
}