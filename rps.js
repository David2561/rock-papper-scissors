let result = "";
let choices=["rock","paper","scissors"];
let player = 0;
let computer = 0;

const btn = document.querySelectorAll(".choice");
btn.forEach(but => but.addEventListener('click',playRound));

const resultDisplay = document.querySelector("#display");

const gameResult = document.querySelector("#results");
            
const playerCount = document.querySelector("#playerScore");

const computerCount = document.querySelector("#computerScore");

function computerPlay(choice){
    return choices[Math.floor(Math.random()*10)%3];
}

function playRound(e){

    
    let playerSelection = e.target.dataset.ch;

    let computerSelection = computerPlay();
    let winner = "None";

    switch(playerSelection){

        case "rock":
            
            switch(computerSelection){

                case "scissors":
                    result = "You Win! Rock beats Scissors";
                    winner = "Player";
                    break;
                            
                case "paper":
                    result = "You Lose! Paper beats Rock";
                    winner = "Computer";
                    break;

                default:
                    result = "It's a Tie!";
                    winner = "None";
                    break;

            }
            break;
        
        case "paper":
            switch(computerSelection){

                case "rock":
                    result = "You Win! Paper beats Rock";
                    winner = "Player";
                    break;
                            
                case "scissors":
                    result = "You Lose! Rock beats Scissors";
                    winner = "Computer";
                    break;

                default:
                    result = "It's a Tie!";
                    winner = "None";
                    break;

            }
            break;

        case "scissors":
            switch(computerSelection){

                case "paper":
                    result = "You Win! Scissors beats Paper";
                    winner = "Player";
                    break;
                            
                case "rock":
                    result = "You Lose! Rock beats Scissors";
                    winner = "Computer";
                    break;

                default:
                    result = "It's a Tie!";
                    winner = "None";
                    break;

            }
            break;
        
        default:
            result = "Invalid Input!";
            winner = "None";
            break;

    }
    if ((player < 5) && (computer < 5)) {
        resultDisplay.textContent=result;    
               
    }
    else{
        resultDisplay.textContent="GAME OVER";
    }
    computeResult(winner); 
    
    
}

function computeResult(winner){
    if (player>=5) {
        
        gameResult.textContent="Congratulations! You Win!!!";

    }else if(computer>=5){

        gameResult.textContent="Too Bad! You Lose, Try Again!!!";

    }else{
        if (winner === "Player") {
            player++;
            playerCount.textContent = `Player : ${player}`;
            
        } else if(winner == "Computer"){
            computer++;
            computerCount.textContent = `computer : ${computer}`;
    
        }
        
    }
    
    
}



