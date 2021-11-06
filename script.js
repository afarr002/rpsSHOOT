window.alert("Let's play Rock, Paper, Scissors!");

// variable declarations
var wins = 0;
var losses = 0;
var ties = 0;

var computerOptions = ["R", "P", "S"];
var randomNum = Math.floor(Math.random() * computerOptions.length);
var computerChoice = computerOptions[randomNum];

//functions

function playAgain() {
  var shouldPlay = window.confirm("Test your luck!" + "\n" + "Shoot Again!!");
  if (shouldPlay) {
    startGame();
  }
}

function displayScore() {
  window.alert(
    "Stats" +
      "\n" +
      "Wins: " +
      wins +
      "\n" +
      "Losses: " +
      losses +
      "\n" +
      "Ties: " +
      ties
  );
}

function startGame() {
  var userChoice = prompt("Select R, P, or S");

  if (userChoice === computerChoice) {
    alert("Near miss" + "\n" + "This was a tie");
    ties++;
    console.log(userChoice);
    console.log(computerChoice);
  } else if ((userChoice === "R" + computerChoice) === "S") {
    alert("It feels good to feel good!" + "\n" + "You win!!");
    wins++;
  } else if ((userChoice === "P" + computerChoice) === "R") {
    alert("It feels good to feel good!" + "\n" + "You win!!");
    wins++;
  } else if ((userChoice === "S" + computerChoice) === "P") {
    alert("It feels good to feel good!" + "\n" + "You win!!");
    wins++;
  } else {
    alert("It sucks to suck!" + "\n" + "You lose!!");
    losses++;
  }

  displayScore();
  playAgain();
}

startGame();
