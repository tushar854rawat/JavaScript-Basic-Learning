let num1 = 6
let num2 = 0
document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;

let total = document.getElementById("equal");
function add(){
    let res = num1 + num2;
    total.textContent = "Total: " + res;
}

function subtract(){
    let res = num1 - num2;
    total.textContent = "Total: " + res;
}

function multiply(){
    let res = num1 * num2;
    total.textContent = "Total: " + res;
}

function divide(){
    if(num2==0){
        total.textContent = "denominator does not be zero";
    }
    else{
        let res = num1 / num2;
        total.textContent = "Total: " + res;
    }   
}
