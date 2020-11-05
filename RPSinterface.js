let pick = [ "rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let computerSelection = computerPlay();
//alert("Choose Rock, Paper, or Scissors and see if you can beat the computer! Best out of five wins!!")


let playScore = document.getElementById("playScore");
playScore.innerText = playerScore;
let compScore = document.getElementById("compScore");
compScore.innerText = computerScore;


// Get the modal
let modal0 = document.getElementById("myModal0");
let modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
let btn = document.getElementById("rock");

// Get the <span> element that closes the modal
let span0 = document.getElementsByClassName("close0")[0];
let span1 = document.getElementsByClassName("close0")[0];



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal0) {
    modal0.style.display = "none";
  }
} 


let spans= document.getElementsByClassName("close0");
for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click',function() {
        modal0.style.display = "none";
        modal1.style.display = "none";
    }
)};




let rock = document.getElementById("rock");
rock.addEventListener("click", function playRound() {
    let playScore = document.getElementById("playScore");
    let playerSelection = "rock";
    console.log(playerSelection, computerSelection);
    if (computerSelection == "rock") {
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        modal0.style.display = "block";
    } else if (computerSelection == "scissors") {
        playerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        modal1.style.display = "block";
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
    /*let modal = document.getElementById("myModal");*/
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
        modal.innerText = "Computer Wins!!!"
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
