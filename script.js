
const display = document.getElementById("display");
  

function appendToDisplay(input){
display.value += input;

}

function calc(){
display.value = eval(display.value);

}


function clearDis(){
display.value = "";
}



