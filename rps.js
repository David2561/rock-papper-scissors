let choices = new Array();
choices=["rock","paper","scissors"];
            
function choose(){
    return choices[Math.floor(Math.random()*10)%3];
}

let aiChoice = choose();
let result = "";

function play(playerChoice){
    let playerChoice = playerChoice.toLowerCase;
    switch(playerChoice){

        case playerChoice == "rock":
            switch(aiChoice){

                case aiChoice == "scissors":
                    result = "You Win!";
                    break;
                            
                case aiChoice == "paper":
                    result = "You Lose!";
                    break;

                default:
                    result = "It's a Tie!";
                    break;

            }
            break;
        
        case playerChoice === "paper":
            switch(aiChoice){

                case aiChoice === "rock":
                    result = "You Win!";
                    break;
                            
                case aiChoice === "scissors":
                    result = "You Lose!";
                    break;

                default:
                    result = "It's a Tie!";
                    break;

            }
            break;

        case playerChoice === "scissors":
            switch(aiChoice){

                case aiChoice === "paper":
                    result = "You Win!";
                    break;
                            
                case aiChoice === "rock":
                    result = "You Lose!";
                    break;

                default:
                    result = "It's a Tie!";
                    break;

            }
            break;
        
        default:
            result = "Invalid input, try again";
            break;

    }

    console.log(result);
                
}
