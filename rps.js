
//get random int counted by max parameter
// max = 3 => output = 0,1,2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// get a r,p,s choice from the computer
function getComputerChoice(){

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

function play(playerSelection, computerSelection) {
    

    var psUpper = playerSelection.toUpperCase();
    var csUpper = computerSelection.toUpperCase();

    var win = "You Win! " + psUpper + " beats " + csUpper;
    var lose = "You Lose! " + csUpper + " beats " + psUpper;


    if (psUpper == "ROCK" && csUpper == "SCISSORS") {
        return win;
    }else if(psUpper == "SCISSORS" && csUpper == "PAPER"){
        return win;
    }else if(psUpper == "PAPER" && csUpper == "ROCK"){
        return win;
    }else if(psUpper == csUpper){
        return "Tie!";
    }else{
        return lose;
    }

}