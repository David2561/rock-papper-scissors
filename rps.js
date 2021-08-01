let result = "";
let choices=["rock","paper","scissors"];

const btn = document.querySelectorAll(".choice");
btn.forEach(but => but.addEventListener('click',playRound));

            
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
    console.log(result);
    return winner;
}

function game (){
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, Scissors?");
        
        let winner = playRound(playerChoice);

        switch(winner){
            case "Player":
                playerWins++;
                break;
            
            case "Computer":
                computerWins++;
                break;
            
            default:
                break;
        }
        
    }
    if (playerWins > computerWins) {
        console.log("You Win The Game!, Congratulations!!!")
    }
    else{
        if(playerWins < computerWins){
            console.log("You Lose The Game!, Try Again!")
        }
        else{
            console.log("A Tie?! How Did That Happen?!")
        }
    }
}

