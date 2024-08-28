let count = document.getElementById("count");
let c = 0;
function count1(){
    c+=1;
    count.textContent = c;
}

let s = document.getElementById("save");
function save(){
    s.innerText+= c + "-";
    count.textContent = 0;
}