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


let buttons = document.querySelectorAll("button");
var pCount = 0;
var cCount = 0;

buttons.forEach((button) => {
  button.addEventListener("click", playGame);

  function playGame() {
    var psUpper = (document.getElementsByClassName(".playerBTN").innerHTML =
      this.value.toUpperCase());
    var csUpper = getComputerChoice().toUpperCase();


    document.getElementById("playersC").innerHTML = psUpper;
    document.getElementById("computerC").innerHTML = csUpper;
    document.getElementById("playerPoints").innerHTML = pCount;
    document.getElementById("computerPoints").innerHTML = cCount;

    var win = "You Win! " + psUpper + " beats " + csUpper;
    var lose = "You Lose! " + csUpper + " beats " + psUpper;

      if (psUpper == "ROCK" && csUpper == "SCISSORS") {
        document.getElementById("result").innerHTML = win;
        pCount += 1;
      } else if (psUpper == "SCISSORS" && csUpper == "PAPER") {
        document.getElementById("result").innerHTML = win;
        pCount += 1;
      } else if (psUpper == "PAPER" && csUpper == "ROCK") {
        document.getElementById("result").innerHTML = win;
        pCount += 1;
      } else if (psUpper == csUpper) {
        document.getElementById("result").innerHTML = "Tie!";
      } else {
        document.getElementById("result").innerHTML = lose;
        cCount += 1;
      }

    if (pCount == 5) {
      document.getElementById("gameEnd").innerHTML = "Player Won the Game!";
    } else if (cCount == 5) {
      document.getElementById("gameEnd").innerHTML = "Computer Won the Game!";
    }
  }
});
