// for (let i = 0; i < 5; i++) {
//     let computer = getComputerChoice();
//     let player = getPlayerSelection();
//     let winner = playRound(player, computer);

//     if (winner === "Computer") {
//         console.log(`You Lose! ${computer} beats ${player}`);
//     } else if (winner === "Player") {
//         console.log(`You Win! ${player} beats ${computer}`);
//     } else if (winner ===  "Draw") {
//         console.log(`It is a tie!`);
//     }

//     if (winner === "Draw") {
//         console.log(`Game ${i + 1}: Draw`);
//         i -= 1;
//     } else {
//         console.log(`Game ${i + 1}: ${winner}`);
//     }
// }



// function getComputerChoice() {
//     let computerChoice = Math.floor(Math.random() * 3 + 1);
//     switch (computerChoice) {
//         case 1:
//             computerChoice = 'rock';
//             break;
//         case 2:
//             computerChoice = 'paper';
//             break;
//         case 3:
//             computerChoice = 'scissors';
//             break;        
//     }
//     return computerChoice;
// }

function playRound(player, computer) {
    // If playerSelection is rock
    let winner;
    if (player === "rock") {
        if (computer === "paper") {
            return winner = "Computer";
        } else if (computer === "scissors") {
            return winner = "Player";
        } else if (computer === "rock") {
            return winner = "Draw";
        }
    }
    // If playerSelection is paper
    else if (player === "paper") {
        if (computer === "paper") {
            return winner = "Draw";
        } else if (computer === "scissors") {
            return winner = "Computer";
        } else if (computer === "rock") {
            return winner = "Player";
        }
    }
    // If playerSelection is scissors
    else if (player === "scissors") {
        if (computer === "paper") {
            return winner = "Player";
        } else if (computer === "scissors") {
            return winner = "Draw";
        } else if (computer === "rock") {
            return winner = "Computer";
        }
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let playerSelection;

rock.addEventListener('click', function(){
    return playerSelection = 'rock';
});

paper.addEventListener('click', function(){
    return playerSelection = 'paper';
});

scissors.addEventListener('click', function(){
    return playerSelection = 'scissors';
});