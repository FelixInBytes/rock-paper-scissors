//get random int counted by max parameter
// max = 3 => output = 0,1,2
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// get a r,p,s choice from the computer
function getComputerChoice() {
  const rk = "Rock";
  const pp = "Paper";
  const si = "Scissors";
  var choice = getRandomInt(3);

  switch (choice) {
    case 0:
      return rk;
      break;
    case 1:
      return pp;
      break;
    case 2:
      return si;
      break;
    default:
      console.log("Sorry something went wrong!");
  }
}

function playRounds() {
  var rounds = Number(window.prompt("How many rounds do you want to play?"));

  for (let index = 0; index < rounds; index++) {
    var playersChoice = window.prompt("Rock, Paper or Scissors?");
    var compChoice = getComputerChoice();

    var end = play(playersChoice, compChoice);
    console.log(end);
  }
}

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", playGame);

  function playGame() {
    var psUpper = (document.getElementsByClassName(".playerBTN").innerHTML =
      this.value.toUpperCase());
    var csUpper = getComputerChoice().toUpperCase();

    console.log(psUpper);
    console.log(csUpper);

    var win = "You Win! " + psUpper + " beats " + csUpper;
    var lose = "You Lose! " + csUpper + " beats " + psUpper;

    if (psUpper == "ROCK" && csUpper == "SCISSORS") {
      console.log(win);
    } else if (psUpper == "SCISSORS" && csUpper == "PAPER") {
      console.log(win);
    } else if (psUpper == "PAPER" && csUpper == "ROCK") {
      console.log(win);
    } else if (psUpper == csUpper) {
      console.log("Tie!");
    } else {
      console.log(lose);
    }
  }
});
