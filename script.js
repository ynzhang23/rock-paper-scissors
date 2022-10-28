// for (let i = 0; i < 5; i++) {
//     let computer = getComputerChoice();
//     let player = getPlayerSelection();
//     let winner = playRound(player, computer);

// if (winner === "Computer") {
//     console.log(`You Lose! ${computer} beats ${player}`);
// } else if (winner === "Player") {
//     console.log(`You Win! ${player} beats ${computer}`);
// } else if (winner ===  "Draw") {
//     console.log(`It is a tie!`);
// }

// if (winner === "Draw") {
//     console.log(`Game ${i + 1}: Draw`);
//     i -= 1;
// } else {
//     console.log(`Game ${i + 1}: ${winner}`);
// }



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';      
    }
}

function playRound(player, computer) {
    // If playerSelection is rock
    if (player === "rock") {
        if (computer === "paper") {
            return "Computer";
        } else if (computer === "scissors") {
            return "Player";
        } else if (computer === "rock") {
            return "Draw";
        }
    }
    // If playerSelection is paper
    else if (player === "paper") {
        if (computer === "paper") {
            return "Draw";
        } else if (computer === "scissors") {
            return "Computer";
        } else if (computer === "rock") {
            return "Player";
        }
    }
    // If playerSelection is scissors
    else if (player === "scissors") {
        if (computer === "paper") {
            return "Player";
        } else if (computer === "scissors") {
            return "Draw";
        } else if (computer === "rock") {
            return "Computer";
        }
    }
}

function updateScore(roundWinner) {
    if(roundWinner === "Player") {
        return ++playerCurrentScore;
    } else if(roundWinner === "Computer") {
        return ++computerCurrentScore;
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const scoreboard = document.querySelector('.scoreboard');

let playerScore = document.querySelector('.user-score');
let computerScore = document.querySelector('.computer-score'); 
let playerSelection;
let computerChoice;
let roundWinner;
let playerCurrentScore = 0;
let computerCurrentScore = 0;

playerScore.textContent = 0;
computerScore.textContent = 0;

rock.addEventListener('click', function(){

    playerSelection = 'rock';
    roundWinner = playRound(playerSelection, computerChoice);
});
paper.addEventListener('click', function(){

    playerSelection = 'paper';
    roundWinner = playRound(playerSelection, computerChoice);
});
scissors.addEventListener('click', function(){
    computerChoice = getComputerChoice();
    playerSelection = 'scissors';
    roundWinner = playRound(playerSelection, computerChoice);
    console.log(roundWinner);
    if (roundWinner === "Player") {
        playerCurrentScore = updateScore(roundWinner);
        playerScore.textContent = playerCurrentScore;
    } else if(roundWinner === "Computer") {
        computerCurrentScore = updateScore(roundWinner);
        computerScore.textContent = computerCurrentScore;
    }
});