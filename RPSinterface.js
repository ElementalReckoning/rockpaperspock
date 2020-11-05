let pick = [ "rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let computerSelection = computerPlay();

let score = document.getElementById("score");
score.innerText = "This is the score";
let playScore = document.getElementById("playScore");
let compScore = document.getElementById("compScore");


let rock = document.getElementById("rock");
rock.addEventListener("click", function playRound() {
    let playScore = document.getElementById("playScore");
    let playerSelection = "rock";
    console.log(playerSelection, computerSelection);
    if (computerSelection == "rock") {
        alert("It's a tie!!!");
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
    } else if (computerSelection == "scissors") {
        alert("You win!!! Rock beats scissors!");
        playerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
    } else {
        alert("You lose!!! Paper beats Rock!");
        computerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
    }
});

let paper = document.getElementById("paper");
paper.addEventListener("click", function playRound() {
    let playScore = document.getElementById("playScore");
    let playerSelection = "paper";
    console.log(playerSelection, computerSelection);
    if (computerSelection == "paper") {
        alert("It's a tie!!!");
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
    } else if ( computerSelection ==  "rock") {
        alert("You win!!! Paper beats Rock!");
        playerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
    } else {
        alert("You lose!!! Scissors beats Paper!");
        computerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
    }
});

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function playRound() {
    let playScore = document.getElementById("playScore");
    let playerSelection = "scissors";
    console.log(playerSelection, computerSelection);
    if (computerSelection == "scissors") {
        alert("It's a tie!!!");
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
    } else if (computerSelection == "paper") {
        alert("You win!!! Scissors beats Paper!");
        playerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
    } else {
        alert("You lose!!! Rock beats scissors!");
        computerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
    }
});

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
};

//work into each separate event listener
function computerPlay() {
    let computerSelection = pick[ Math.floor(Math.random() * pick.length) ]
    return computerSelection;
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        playRound(playerSelection, computerSelection);
            let score = `The score is ${playerScore} to ${computerScore}`;
            alert(score);
    }
};


    //game();