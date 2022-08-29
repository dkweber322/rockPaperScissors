const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return myArray[Math.floor((Math.random() * myArray.length))];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        
        console.log("You win! Rock beats Scissors!");
        return 1;

    } else if (playerselection === "Paper" && computerSelection === "Rock"){

        console.log("You win! Paper beats Rock!");
        return 1;

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {

        console.log("You win! Scissors beats Paper!")
        return 1;

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {

        console.log("You lose! Paper beats Rock!");
        return 0;

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {

        console.log("You lose! Scissors beats Paper!")
        return 0;

    } else if(playerSelection === "Scissors" && computerSelection === "Rock") {

        console.log("You lose! Rock beats Scissors!")
        return 0;

    } else if(playerSelection === computerSelection) {

        console.log("Tie!");
        return 2;

    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Your turn");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        
    }
}


game();