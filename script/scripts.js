let [computer_score, user_score] = [0, 0];
window.onload = function getSavedScore() {
  if (sessionStorage.getItem("score")) {
    user_score = sessionStorage.getItem("score");
    document.getElementById("scoreLabel").innerHTML = user_score;
  } else {
    user_score = 0;
    document.getElementById("scoreLabel").innerHTML = user_score;
  }
};
const mq = window.matchMedia("(min-width: 856px)");

const winning_choices = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function gameMatch(userChoice) {
  let computerChoice =
    winning_choices[
      Object.keys(winning_choices)[
        Math.floor(Math.random() * Object.keys(winning_choices).length)
      ]
    ];

  document.getElementById("game").style.display = "none";
  document.getElementById("gameChoice").style.display = "flex";
  let playerAnimation = false;
  let computerAnimation = false;

  let playerDiv = document.getElementById("playerChoice");
  let computerDiv = document.getElementById("computerChoice");

  if (userChoice === computerChoice) {
    document.getElementById("matchResult").textContent = "DRAW";
    document.getElementById("btn_playAgain").style.color = "rgb(255, 170, 0)";
  } else if (
    Object.entries(winning_choices).find(
      ([key, value]) => key === userChoice && value === computerChoice
    )
  ) {
    document.getElementById("matchResult").textContent = "YOU WIN";
    document.getElementById("btn_playAgain").style.color = "#0000FF";
    playerAnimation = true;
    user_score++;
  } else {
    document.getElementById("matchResult").textContent = "YOU LOSE";
    document.getElementById("btn_playAgain").style.color = "#FF0000";
    computerAnimation = true;
    user_score--;
  }

  appendElement(playerDiv, userChoice, "YOU CHOOSE", playerAnimation);

  appendElement(
    computerDiv,
    computerChoice,
    "THE HOUSE PICKED",
    computerAnimation
  );

  sessionStorage.setItem("score", user_score);
  document.getElementById("scoreLabel").innerHTML = user_score;
}

function rematch() {
  if (mq.matches) {
    document.getElementById("game").style.display = "flex";
  } else {
    document.getElementById("game").style.display = "grid";
  }
  document.getElementById("gameChoice").style.display = "none";
  document.getElementById("playerChoice").innerHTML = "";
  document.getElementById("computerChoice").innerHTML = "";
}

function appendElement(div, typeButton, titleText, animation) {
  let button = document.createElement("button");
  let title = document.createElement("h3");
  title.appendChild(document.createTextNode(titleText));

  button.setAttribute("class", "btn_Game");
  if (typeButton == "rock") {
    button.setAttribute("id", "btn_Rock");
    if (animation) {
      button.style.setProperty("animation", "pulse-animation-rock 2s infinite");
    }
  } else if (typeButton == "scissors") {
    button.setAttribute("id", "btn_Scissors");
    if (animation) {
      button.style.setProperty(
        "animation",
        "pulse-animation-scissors 2s infinite"
      );
    }
  } else if (typeButton == "paper") {
    button.setAttribute("id", "btn_Paper");
    if (animation) {
      button.style.setProperty(
        "animation",
        "pulse-animation-paper 2s infinite"
      );
    }
  }

  div.appendChild(title);
  div.appendChild(button);
}

function showRules() {
  document.getElementById("rulesCard").style.display = "block";
}

function hideRules() {
  document.getElementById("rulesCard").style.display = "none";
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape) {
    hideRules();
  }
};
