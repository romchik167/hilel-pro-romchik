const text = document.querySelector('.text');
text.addEventListener("click", () => {
    if(text.style.color !== "red"){
        text.style.color = "red";
    }else{
        text.style.color = "black";
    }
})