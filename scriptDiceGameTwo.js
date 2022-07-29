// for greying out player sides when it is not their turn 
const playerOneSide = document.getElementById("playerOneSideOverlay"); 
const playerTwoSide = document.getElementById("playerTwoSideOverlay"); 

// player 1 variables 
const scoreOneText = document.getElementById("scoreOneText"); 
const playerOneScoreTotal = document.getElementById("playerOneScoreTotal"); 
const playerOneResult = document.getElementById("playerOneResult"); 
const playerOneResultDie = document.getElementById("playerOneResultDie"); 
const rollBtnOne = document.getElementById("rollBtnOne"); 
const holdScore = document.getElementById("holdScore"); 

// player 2 variables 
const scoreTwoText = document.getElementById("scoreTwoText"); 
const playerTwoScoreTotal = document.getElementById("playerTwoScoreTotal"); 
const playerTwoResult = document.getElementById("playerTwoResult"); 
const playerTwoResultDie = document.getElementById("playerTwoResultDie"); 
const rollBtnTwo = document.getElementById("rollBtnTwo"); 

// for switching between tutorial/game/end screens 
const tutorial = document.getElementById("tutorial"); 
const endScreen = document.getElementById("endScreen"); 
const gameTwo = document.getElementById("gameTwo"); 

// end screem shenanigans 
const winner = document.getElementById("winner"); 
const loser = document.getElementById("loser"); 

// turns
let playerOneTurn = true; 
let playerTwoTurn = false; 

// hiding game screen while tutorial shows
gameTwo.style.display = "none"; 
endScreen.style.display = "none"; 

// setting starting stats 
let playerOneScore = 0; 
let playerTwoScore = 0; 
let playerHold = false; 
let gameOver = false; 
let playerOneWin = false; 
let playerTwoWin = false; 
let diceResultP1 = 0; 
let diceResultP2 = 0; 

// functions
const rollDiceP1 = () => {
    diceResultP1 = Math.floor(Math.random() * 6) + 1;
    playerOneScore += diceResultP1;
    switch (diceResultP1) {
        case 1:
            playerOneResultDie.src = "images/rollOne.png"; 
            break;
        case 2:
            playerOneResultDie.src = "images/rollTwo.png"; 
            break;
        case 3:
            playerOneResultDie.src = "images/rollThree.png"; 
            break;
        case 4:
            playerOneResultDie.src = "images/rollFour.png"; 
            break;
        case 5:
            playerOneResultDie.src = "images/rollFive.png"; 
            break;
        case 6:
            playerOneResultDie.src = "images/rollSix.png"; 
            break;
    }
}

const rollDiceP2 = () => {
    diceResultP2 = Math.floor(Math.random() * 6) + 1;
    playerTwoScore += diceResultP2;
    switch (diceResultP2) {
        case 1:
            playerTwoResultDie.src = "images/rollOne.png"; 
            break;
        case 2:
            playerTwoResultDie.src = "images/rollTwo.png"; 
            break;
        case 3:
            playerTwoResultDie.src = "images/rollThree.png"; 
            break;
        case 4:
            playerTwoResultDie.src = "images/rollFour.png"; 
            break;
        case 5:
            playerTwoResultDie.src = "images/rollFive.png"; 
            break;
        case 6:
            playerTwoResultDie.src = "images/rollSix.png"; 
            break;
    }
}

const checkScore = () => {
    if (diceResultP1 == 1) {
        gameOver = true; 
        playerTwoWin = true; 
    } else if (diceResultP2 == 1) {
        gameOver = true; 
        playerOneWin = true; 
    } else if (playerTwoScore > playerOneScore) {
        gameOver = true; 
        playerTwoWin = true;
    }
}

const gameOverScreen = () => {
    gameTwo.style.display = "none"; 
    endScreen.style.display = "block";
    if (playerOneWin == true) {
        winner.innerHTML = "Congratulations player one!"; 
        loser.innerHTML = "Better luck next time, player two..."; 
    } else if (playerTwoWin == true) {
        winner.innerHTML = "Congratulations player two!"; 
        loser.innerHTML = "Better luck next time, player one..."; 
    }
}

// event listeners
playBtn.addEventListener("click", () => {
    gameTwo.style.display = "block"; 
    tutorial.style.display = "none";
})

holdScore.addEventListener("click", () => {
    playerHold = true;
    playerOneSide.style.backgroundColor = "#00000030";
    playerTwoSide.style.backgroundColor = "#00000000";
})

rollBtnOne.addEventListener("click", () => {
    if (gameOver == true) {
        gameOverScreen(); 
    } else if (playerHold == false) {
        rollDiceP1(); 
        checkScore(); 
        playerOneScoreTotal.innerHTML = playerOneScore;
        playerOneResult.innerHTML = diceResultP1;
    }
})

rollBtnTwo.addEventListener("click", () => {
    if (gameOver == true) {
        gameOverScreen(); 
    } else if (playerHold == true) {
        rollDiceP2(); 
        checkScore(); 
        playerTwoScoreTotal.innerHTML = playerTwoScore;
        playerTwoResult.innerHTML = diceResultP2;
    }
})