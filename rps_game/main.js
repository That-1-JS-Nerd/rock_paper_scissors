'use-strict';

const restartBtn = document.getElementById('restart');
const exitBtn = document.getElementById('quit');

const rockBtn = document.getElementById('rockID');
const paperBtn = document.getElementById('paperID');
const scissorsBtn = document.getElementById('scissorID');

const playBtns = document.querySelectorAll('.play-btn');

let playerScore = 0;
let computerScore = 0;
let statMsg;

const scores = document.querySelector('.pl-comp');
scores.textContent = `${playerScore} - ${computerScore}`;

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// =============== Game round logic ===============
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Player win conditions
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        statMsg = `Player wins: ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        statMsg = `It's a Tie!!`;
    } else {
        // Computer win condition
        computerScore++;
        statMsg = `Computer wins: ${computerSelection} beats ${playerSelection}`;
    }

    return statMsg;
}

// =============== MAIN LOOP =============== 
function gameLoop() {

    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = prompt('Input: ');
    //     const computerSelection = computerPlay();
    //     console.log(playRound(playerSelection, computerSelection));
    // }
    // return playerScore > computerScore ? `Player Wins: ${playerScore}, Computer: ${computerScore}` : playerScore === computerScore ? `It's a Tie!!` : `Computer Wins: ${computerScore}`;
}

function exitGame() {
    exitBtn.addEventListener('click', () => {
        
    });
    // TODO: Create exit game function
}

exitGame();
// gameLoop();

