let pick = [ "rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let namep = prompt("What is your name?");
//alert("Choose Rock, Paper, or Scissors and see if you can beat the computer! Best out of five wins!!")

let name = document.getElementById("div0");
name.innerText = namep + " VS Computer";


let playScore = document.getElementById("playScore");
playScore.innerText = playerScore;
let compScore = document.getElementById("compScore");
compScore.innerText = computerScore;
let round = document.getElementById("div1");


let modal0 = document.getElementById("myModal0");
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
    if (e.target == modal0 || e.target == modal1 || e.target == modal2) {
      modal0.style.display = "none";
      modal1.style.display = "none";
      modal2.style.display = "none";
    }
  } 

let spans = document.getElementsByClassName("close0");
for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click',function() {
        modal0.style.display = "none";
        modal1.style.display = "none";
        modal2.style.display = "none";
    }
)};



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    return computerSelection;
}


let rock = document.getElementById("rock");
rock.addEventListener("click", function playRound() {
    let computerSelection = pick[ Math.floor(Math.random() * pick.length) ];
    let playScore = document.getElementById("playScore");
    let playerSelection = "rock";
    document.getElementById('img0').classList.add('ani');
    console.log(playerSelection, computerSelection);
    if (computerSelection == "rock") {
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        div1.innerText = "It's A Tie!!!"
    } else if (computerSelection == "scissors") { (playScore)
        playerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        div1.innerText = "You Win!!!"
    } else if (computerSelection == "paper") {
        computerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        div1.innerText ="Computer Wins!!!"
    }
    reset();
});

let paper = document.getElementById("paper");
paper.addEventListener("click", function game() {
    let computerSelection = pick[ Math.floor(Math.random() * pick.length) ];
    let playScore = document.getElementById("playScore");
    let playerSelection = "paper";
    console.log(playerSelection, computerSelection);
    if (computerSelection == "paper") {
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        div1.innerText = "It's A Tie!!!"
    } else if ( computerSelection ==  "rock") {
        playerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        div1.innerText = "You Win!!!"
    } else {
        computerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        div1.innerText ="Computer Wins!!!"
    }
    reset();
});

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function playRound() {
    let computerSelection = pick[ Math.floor(Math.random() * pick.length) ];
    let playScore = document.getElementById("playScore");
    let playerSelection = "scissors";
    console.log(playerSelection, computerSelection);
    if (computerSelection == "scissors") {
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        div1.innerText = "It's A Tie!!!"
    } else if (computerSelection == "paper") {
        playerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        div1.innerText = "You Win!!!"
    } else { 
        computerScore += 1;
        compScore.innerText = computerScore;
        playScore.innerText = playerScore;
        div1.innerText ="Computer Wins!!!"
    }
    reset();
});




function endGame() {
    if (playerScore === 5) {
        modal1.style.display = "block";
      return true;
    } else if (computerScore === 5) {
        modal2.style.display = "block";
        return true;
    }
    return false;
  }

  function reset() {
    if (endGame()) {
      setTimeout(function(){
        playerScore = 0;
        computerScore = 0;
        playScore.innerText = playerScore;
        compScore.innerText = computerScore;
        gameActive = false;
        round.innerText ="";
        /*let namep = prompt("What is your name?");
        name.innerText = namep + " VS Computer";*/
      } )    
    }
  }
