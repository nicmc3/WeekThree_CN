const playAgain = document.getElementById("playAgain");
const rollBtn = document.getElementById("rollBtn");
const playerScoreTotal = document.getElementById("playerScoreTotal");
const playerResult = document.getElementById("playerResult");
const playerResultDie = document.getElementById("playerResultDie");
const winnerText = document.getElementById("winnerText"); 
const loserText = document.getElementById("loserText");
const scoreText = document.getElementById("scoreText");
const rolledText = document.getElementById("rolledText");
const playBtn = document.getElementById("playBtn"); 

const game = document.getElementById("game"); 
const tutorial = document.getElementById("tutorial"); 

game.style.display = "none"; 

let playerScore = 0;
let diceResult = 0;
let playerWin = false;
let playerLose = false;

const rollDice = () => {
    diceResult = Math.floor(Math.random() * 6) + 1;
    playerScore += diceResult;
    switch (diceResult) {
        case 1:
            playerResultDie.src = "images/rollOne.png"; 
            break;
        case 2:
            playerResultDie.src = "images/rollTwo.png"; 
            break;
        case 3:
            playerResultDie.src = "images/rollThree.png"; 
            break;
        case 4:
            playerResultDie.src = "images/rollFour.png"; 
            break;
        case 5:
            playerResultDie.src = "images/rollFive.png"; 
            break;
        case 6:
            playerResultDie.src = "images/rollSix.png"; 
            break;
    }

}

const checkWin = () => {
    if (diceResult == 1) {
        playerLose = true;
    } else if (playerScore >= 20) {
        playerWin = true;
    }
}

playBtn.addEventListener("click", () => {
    game.style.display = "block"; 
    tutorial.style.display = "none";
})

rollBtn.addEventListener("click", () => {
    rollDice();
    checkWin();
    playerScoreTotal.innerHTML = playerScore;
    playerResult.innerHTML = diceResult;
    if (playerLose == true) {
        scoreText.innerHTML = "FINAL SCORE"
        rollBtn.style.display = "none"; 
        rolledText.style.display = "none";
        playerResult.style.display = "none";
        playAgain.style.display = "block"; 
        loserText.style.display = "block"; 
    } else if (playerWin == true) {
        scoreText.innerHTML = "FINAL SCORE"
        rollBtn.style.display = "none"; 
        rolledText.style.display = "none";
        playerResult.style.display = "none";
        playAgain.style.display = "block"; 
        winnerText.style.display = "block"; 
    }
})