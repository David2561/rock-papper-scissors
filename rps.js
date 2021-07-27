let result = "";
let choices = new Array();

choices=["rock","paper","scissors"];
            
function choose(){
    return choices[Math.floor(Math.random()*10)%3];
}

function play(playerChoice){
    playerChoice = playerChoice.toLowerCase();
    let aiChoice = choose();
    switch(playerChoice){

        case "rock":
            
            switch(aiChoice){

                case "scissors":
                    result = "You Win!";
                    break;
                            
                case "paper":
                    result = "You Lose!";
                    break;

                default:
                    result = "It's a Tie!";
                    break;

            }
            break;
        
        case "paper":
            switch(aiChoice){

                case "rock":
                    result = "You Win!";
                    break;
                            
                case "scissors":
                    result = "You Lose!";
                    break;

                default:
                    result = "It's a Tie!";
                    break;

            }
            break;

        case "scissors":
            switch(aiChoice){

                case "paper":
                    result = "You Win!";
                    break;
                            
                case "rock":
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
