let pick = [ "rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" ||  playerSelection == "scissors" && computerSelection == "paper") { 
        playerScore = playerScore + 1;
        alert( `You win! ${playerSelection} beats ${computerSelection}!`);
        } else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection  == "paper" && computerSelection == "paper" || playerSelection == "scissors" &&   computerSelection == "scissors") {
            alert("It's a tie!!!");
        } else { 
            computerScore = computerScore + 1;
            alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
}

}

//prompts user for input and uses computerPlay() as value
//alerts score, runs until either player reaches five points
function game() {
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection =prompt("What is your pick? Rock, paper, or scissors???")
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
            let score = `The score is ${playerScore} to ${computerScore}`;
            alert(score);
    }
}


    //returns random value from pick variable
    function computerPlay() {
        let computerSelection = pick[ Math.floor(Math.random() * pick.length) ]
        return computerSelection
    }

    game();