
let [computer_score,user_score]=[0,0];

const winning_choices = {
    rock: 'scissor',
    paper: 'rock',
    scissor: 'paper',
  };

function gameMatch (userChoice){
    let computerChoice = winning_choices[Object.keys(winning_choices)[Math.floor(Math.random()*Object.keys(winning_choices).length)]];
    showGameChoice(userChoice)
    console.log("----------------------------------------------------------------------")
    console.log("COMPUTER CHOOSE: "+computerChoice);

    if(userChoice === computerChoice){
        alert("DRAW - "+"IL COMPUTER HA SCELTO: "+computerChoice);
    } 
    else if(Object.entries(winning_choices).find(([key, value]) => key === userChoice && value === computerChoice)){
        alert("USER WIN - "+"IL COMPUTER HA SCELTO: "+computerChoice);
        user_score++;
    }
    else{
        alert("COMPUTER WIN - "+"IL COMPUTER HA SCELTO: "+computerChoice);
        user_score--;
    }

    document.getElementById('scoreLabel').innerHTML= user_score;
    console.log("PLAYER: "+user_score+" - "+"COMPUTER: "+computer_score)
    console.log("----------------------------------------------------------------------")
}

function showGameChoice(choice){

    document.getElementById('game').style.display="none";
    document.getElementById('gameChoice').style.display="flex";
    var element = document.createElement("button");
    element.className = "btn_Game";

    if(choice == 'rock'){
        element.id = "btn_Rock";
    }
    if(choice == 'paper'){
        element.id = "btn_Paper";
    }
    if(choice == 'scissors'){
        element.id = "btn_Scissors";
    }
    element.style.setProperty("animation", "pulse-animation 3s infinite");
    var foo = document.getElementById("gameChoice");
    //Append the element in page (in span).  
    foo.appendChild(element)

}