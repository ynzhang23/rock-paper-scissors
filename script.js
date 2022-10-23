getComputerChoice();
getPlayerSelection();

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    switch (computerChoice) {
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
            break;        
    }
    console.log(computerChoice);
}

function getPlayerSelection() {
    let playerSelection = prompt("Input your selection: ").toLowerCase();
    console.log(playerSelection);
    if (playerSelection === "rock" || playerSelection ===  "paper" || playerSelection === "scissors") {
        alert("Entry valid");
        return playerSelection;
    } else {
        alert("Entry invalid");
        getPlayerSelection();
    }
}

function declareWinner(getPlayerSelection, ) {
    
}