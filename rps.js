
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