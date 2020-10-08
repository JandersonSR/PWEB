var choices = ["paper","rock","scissor"];
var i = Math.floor (Math.random() * 3);
var comChoice = choices[i];
var userPoints = 0;
var compPoints = 0;



function score(){
    let score_div =  document.getElementById("score").innerHTML = userPoints + " - " + compPoints; 
}
setInterval (score,50);

function convert(word){
    if(word === "paper") return '<i class="far fa-hand-paper"></i>';
    if(word === "rock") return '<i class="far fa-hand-rock"></i>';
    return '<i class="far fa-hand-scissors"></i>';
}
function game(userChoice){
    let box = document.getElementById("challenge");
    box.style.display = "inline-flex";

    let userDiv = document.getElementById("userObject");
    userDiv.innerHTML = convert(userChoice);

    let comDiv = document.getElementById("comObject");
    comDiv.innerHTML = convert(comChoice);
    if(userChoice === "paper" && comChoice ==="rock" || userChoice === "rock" && comChoice ==="scissor" || userChoice === "scissor" && comChoice ==="paper"){
        win(userChoice);
    }
    else if( userChoice === comChoice){
        draw(userChoice);
    }
    else{
        lose(userChoice);
    }
}

setInterval(function continueGame(){
    i = Math.floor(Math.random() * 3);
    comChoice = choices[i];    
    box.style.display = "none";
} , 1000);

function win(btn){
    userPoints++;
    document.getElementById("who").innerHTML = "Teve sorte desta vez!";
}
function draw(btn){
    document.getElementById("who").innerHTML = "Na proxima você perde!";
}
function lose(btn){
    compPoints++;
    document.getElementById("who").innerHTML = "Chora!";
}

