const number = document.querySelector(".counter");
const buttons = document.querySelectorAll(".btn");
console.log(buttons);
let count = 0;

buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const classin = e.currentTarget.classList;
        if(classin.contains("decrease")){
            count--;
        }else if(classin.contains("increase")){
            count++;
        }else{
            count = 0 ;
        }
        number.innerHTML = count
    })
})