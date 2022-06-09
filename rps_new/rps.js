'use-strict';

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let statMsg = document.querySelector('.current');

const playBtns = document.querySelectorAll('.playBtn');
const exitBtn = document.querySelector('#exit');
const restartBtn = document.querySelector('#restart');
const closeWin = document.querySelector('.leave');
const returnWin = document.querySelector('.return');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const winnerMsg = document.querySelector('.winner-stats');
const gameStats = document.querySelector('.game-stats');
const gameStats = document.querySelector('.game-stats');

winnerMsg.textContent = '';
statMsg.textContent = '';

displayMsg();

exitBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    modal.style.display = 'block';
});

restartBtn.addEventListener('click', () => restart());
closeWin.addEventListener('click', () => window.close());

returnWin.addEventListener('click', ()=> {
    overlay.style.display = 'none';
    modal.style.display = 'none';
});

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    playerSelection = this.id;
    computerSelection = computerPlay().toLowerCase();

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        ++playerScore;
        statMsg.textContent = `Player wins: ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        statMsg.textContent = `It's a Tie!!`;
    } else {
        ++computerScore;
        statMsg.textContent = `Computer wins: ${computerSelection} beats ${playerSelection}`;
    }
    gameStats.textContent = `${playerScore} - ${computerScore}`;
    endGame();
}

function endGame() {
    if (playerScore === 5 || computerScore === 5) {
        winnerMsg.textContent = `${playerScore > computerScore ? 'Player' : 'Computer'} Wins!!`;
        playBtns.forEach((btn) => btn.removeEventListener('click', playRound));
    }
}

function displayMsg() {
    gameStats.textContent = `${playerScore} - ${computerScore}`;
}

function restart() {
    game();
    statMsg.textContent = '';
    computerScore = 0;
    playerScore = 0;
    gameStats.textContent = `${playerScore} - ${computerScore}`;
}

function game() {
    playBtns.forEach((btn) => btn.addEventListener('click', playRound));
    displayMsg();
}

game();
