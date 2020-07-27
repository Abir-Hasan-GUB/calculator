const len = document.querySelectorAll(".common-btn").length;
for(var i = 0; i< len; i++){
    document.querySelectorAll(".common-btn")[i].addEventListener("click",function hellow(){
        var buttonValue = this.innerHTML; // get button value
        var previousBtnValue = document.getElementById("charecter").innerHTML;
       document.getElementById("charecter").innerHTML = +previousBtnValue + buttonValue; // add button value to screen
      
    })
}