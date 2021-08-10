function addUser() {
player_1= document.getElementById("player_1").value;
player_2= document.getElementById("player_2").value;
localStorage.setItem("player_1" , player_1);
localStorage.setItem("player_2" , player_2);
window.location = "index.html";
}

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    answer = parseInt(number1) * parseInt(number2);
}