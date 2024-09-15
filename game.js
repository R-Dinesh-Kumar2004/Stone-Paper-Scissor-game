let msg=confirm("This is Stone Paper Scissor game.If you get first 13 points then you win the game.else you lose the game.If you want to play click ok..");
        let userScore = 0, botScore = 0;
        var flag=0;
        function play(userVal) {
            if(flag==0 && msg){
            let computer = Math.floor(Math.random() * 3);
            let arr = ["stone", "paper", "scissor"];
            let computerChoice = arr[computer];
            document.getElementById(computerChoice).style.backgroundColor = "rgb(23,224,23)";

            if (computerChoice === userVal) {
                document.getElementById("tie").innerHTML = "This round is a tie!";
            }

            else if (computerChoice === "stone" && userVal === "paper" ||
                computerChoice === "paper" && userVal === "scissor" ||
                computerChoice === "scissor" && userVal === "stone") {
                userScore++;
            }
            else {
                botScore++;
            }

            if (botScore === 13 || userScore===13) {
                flag=1;
                if(botScore===13){
                    document.getElementById("gameOver").innerHTML="Game Over! You Lose...";
                }
                else{
                    document.getElementById("gameOver").innerHTML="Game Over! You Won the Match...";
                }
                let btn = document.createElement('button');
                btn.innerHTML="Replay";
                document.getElementById("replay").appendChild(btn);
                btn.onclick=function (){
                    location.reload();
                }
            }

            document.getElementById("score").innerHTML =` BotScore: ${botScore}  YourScore: ${userScore}`;
            setTimeout(check, 500, computerChoice);
        }
    }

        function check(color) {
            document.getElementById(color).style.backgroundColor = 'black';
            document.getElementById("tie").innerHTML = '';
        }