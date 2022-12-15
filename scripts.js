
let [computer_score,user_score]=[0,0];

const winning_choices = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

function gameMatch (userChoice){
    let computerChoice = winning_choices[Object.keys(winning_choices)[Math.floor(Math.random()*Object.keys(winning_choices).length)]];
    document.getElementById('game').style.display= "none";
    document.getElementById('gameChoice').style.display= "flex";

    let playerDiv = document.getElementById('playerChoice');
    let computerDiv = document.getElementById('computerChoice');

    appendElement(playerDiv, userChoice,"YOU CHOOSE");
    appendElement(computerDiv, computerChoice, "THE HOUSE PICKED");

    if(userChoice === computerChoice){
        document.getElementById('matchResult').textContent="DRAW";
    } 
    else if(Object.entries(winning_choices).find(([key, value]) => key === userChoice && value === computerChoice)){
        document.getElementById('matchResult').textContent="YOU WIN";
        user_score++;
    }
    else{
        document.getElementById('matchResult').textContent="YOU LOSE";
        user_score--;
    }

    document.getElementById('scoreLabel').innerHTML= user_score;
}

function rematch(){
    document.getElementById('game').style.display= "flex";
    document.getElementById('gameChoice').style.display= "none";
    document.getElementById('playerChoice').innerHTML = "";
    document.getElementById('computerChoice').innerHTML = "";
}

function appendElement(div, typeButton, titleText){
    let button = document.createElement("button");
    let title = document.createElement("h3");
    title.appendChild(document.createTextNode(titleText));

    button.setAttribute("class","btn_Game");
    if(typeButton == 'rock'){
        button.setAttribute("id","btn_Rock");
    }

    else if(typeButton == 'scissors'){
        button.setAttribute("id","btn_Scissors");
    }

    else if(typeButton == 'paper'){
        button.setAttribute("id","btn_Paper");
    }

    div.appendChild(title)
    div.appendChild(button);
}