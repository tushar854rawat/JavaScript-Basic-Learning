const container = document.getElementById("container");

container.innerHTML = "<button onclick='buy()'>buy</button>";

function buy(){
    container.innerHTML += "<p>thanks for buying</p>";
}