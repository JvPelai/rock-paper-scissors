let availablePlays = ["rock", "paper", "scissors"];
let playerSelection = "";
//adds a message with the results
const message = document.querySelector('#message');
const para = document.createElement('p');
para.classList.add('para');
para.textContent = '';
message.appendChild(para);

const scoreboard = document.querySelector('#scoreboard')
const board = document.createElement('h3');
board.classList.add('board');
board.textContent = 'SCORE'
scoreboard.appendChild(board);

let computerScore = 0;
let playerScore = 0;
    
    //selects a random array element for the computer to play
    function computerPlay() {
        computerSelection = availablePlays[Math.floor(Math.random()*availablePlays.length)];
        console.log(computerSelection);
        return computerSelection;
    }

    result = " "
    //this function calculates the results of a round
    function playRound(computerSelection, playerSelection) {
        if (playerSelection === "rock") {
            if(computerSelection ==="rock"){
                result = "It's a tie, try again!\n"; 
                para.textContent = result;
                board.textContent = "You" + playerScore + " VS " + computerScore + "Computer"
                return game(playerScore,computerScore)
            }
            else if (computerSelection === "scissors"){
                playerScore++;
                result = "Congratulations, You Win this round!";
                para.textContent = result;
                board.textContent = "You" + playerScore + " VS " + computerScore + "Computer"
                return game(playerScore,computerScore)
            }
            else{
                computerScore++
                result = "Too bad! The Computer wins this time...";
                para.textContent = result;
                board.textContent = "You" + playerScore + " VS " + computerScore + "Computer"
                return game(playerScore,computerScore)
            }
            }
        else if(playerSelection === "scissors"){
            if(computerSelection === "scissors"){
                result = "It's a tie, try again!";
                para.textContent = result;
                return game(playerScore,computerScore)
            }
            else if(computerSelection === "paper"){
                playerScore++;
                result = "Congratulations, You win this round!";
                para.textContent = result;
                board.textContent = "You" + playerScore + " VS " + computerScore + "Computer"
                return game(playerScore,computerScore)
            }
            else{
                computerScore++;
                result = "Too bad! The computer wins this time...";
                para.textContent = result;
                board.textContent = "You" + playerScore + " VS " + computerScore + "Computer"
                return game(playerScore,computerScore)
            }
        }
        else if (playerSelection === "paper"){
            if(computerSelection === "paper"){
                result = "It's a tie, try again!"; 
                para.textContent = result;
                board.textContent = "You" + playerScore + " VS " + computerScore + "Computer"
                return game(playerScore,computerScore)
            }
            else if (computerSelection === "rock"){
                playerScore++;
                result = "Congratulation, You win this round!";
                para.textContent = result;
                board.textContent = "You" + playerScore + " VS " + computerScore + "Computer"
                return game(playerScore,computerScore)
            }
            else {
                computerScore++;
                result = "Too bad! The computer wins this time...";
                para.textContent = result;
                board.textContent = "You" + playerScore + " VS " + computerScore + "Computer"
                return playerScore,computerScore
            }
        }
        else {
            result = "invalid value, you must choose between rock, paper or scissors...";
            para.textContent = result;
            return game(playerScore,computerScore)
        }
        }

//game values for the buttons
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "rock";
    let computerSelection = computerPlay();
    computerPlay();
    playRound(computerSelection,playerSelection);
});
const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    playerSelection = "paper";
    let computerSelection = computerPlay();
    computerPlay();
    playRound(computerSelection,playerSelection);
});
const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    let computerSelection = computerPlay();
    computerPlay();
    playRound(computerSelection,playerSelection);
});

function game(playerScore,computerScore){
    if ((computerScore + playerScore) >= 5){
        if(computerScore > playerScore){
            console.log("  The computer wins!\n   Computer " + computerScore + " VS " + playerScore + " You");
            board.textContent = "   The computer wins!\n   Computer " + computerScore + " VS " + playerScore + " You";
            computerScore = 0;
            playerScore = 0;
        }
        else{
            board.textContent = "  You Win!\n You" + playerScore + " VS " + computerScore + "Computer";
            computerScore = 0;
            playerScore = 0;
        }
    }
    else{
        return;
    }}
