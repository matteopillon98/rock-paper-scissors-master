
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
    let playerAnimation = false;
    let computerAnimation = false;

    let playerDiv = document.getElementById('playerChoice');
    let computerDiv = document.getElementById('computerChoice');

    if(userChoice === computerChoice){
        document.getElementById('matchResult').textContent="DRAW";
    } 
    else if(Object.entries(winning_choices).find(([key, value]) => key === userChoice && value === computerChoice)){
        document.getElementById('matchResult').textContent="YOU WIN";
        playerAnimation = true;
        user_score++;
    }
    else{
        document.getElementById('matchResult').textContent="YOU LOSE";
        computerAnimation = true;
        user_score--;
    }


    appendElement(playerDiv, userChoice,"YOU CHOOSE",playerAnimation);
    appendElement(computerDiv, computerChoice, "THE HOUSE PICKED",computerAnimation);

    document.getElementById('scoreLabel').innerHTML= user_score;
}

function rematch(){
    document.getElementById('game').style.display= "flex";
    document.getElementById('gameChoice').style.display= "none";
    document.getElementById('playerChoice').innerHTML = "";
    document.getElementById('computerChoice').innerHTML = "";
}

function appendElement(div, typeButton, titleText, animation){
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

    if(animation){
        button.style.setProperty("animation", "pulse-animation 2s infinite");
    }

    div.appendChild(title)
    div.appendChild(button);
}

function showRules() {
    document.getElementById("rulesCard").style.display = "block";
}
  
function hideRules (){
    document.getElementById("rulesCard").style.display = "none";
}

