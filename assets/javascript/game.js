var wins = 0;
var winsText = document.getElementById("wins-text");
var losses = 0;
var lossesText = document.getElementById("losses-text");
var score = 0;
var totalScoreText = document.getElementById("totalScore-text");

var randNum1 = Math.floor(Math.random() * 12)+1;
var redGemImage = document.getElementById("redGem");
var randNum2 = Math.floor(Math.random() * 12)+1;
var blueGemImage = document.getElementById("blueGem");
var randNum3 = Math.floor(Math.random() * 12)+1;
var yellowGemImage = document.getElementById("yellowGem");
var randNum4 = Math.floor(Math.random() * 12)+1;
var greenGemImage = document.getElementById("greenGem");
var randNumStart = Math.floor(Math.random() * 50);
var randNumText = document.getElementById("randNum-text");


function start() {
    randNumStart = Math.floor(Math.random() * 50);
    randNumText.textContent = randNumStart;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    score = 0;
    totalScoreText.textContent = score;
    randNum1 = Math.floor(Math.random() * 12)+1;
    redGemImage = randNum1;
    console.log(redGemImage);
    randNum2 = Math.floor(Math.random() * 12)+1;
    blueGemImage = randNum2;
    console.log(blueGemImage);
    randNum3 = Math.floor(Math.random() * 12)+1;
    yellowGemImage = randNum3;
    console.log(yellowGemImage);
    randNum4 = Math.floor(Math.random() * 12)+1;
    greenGemImage = randNum4;
    console.log(greenGemImage);
};

function checkScore(){
    if(score == randNumStart){
        wins++;
        start();
    }
    else if (score >= randNumStart){
        losses++;
        start();
    }
}

function clickRedGem() {
    score = score + randNum1
    totalScoreText.textContent = score;
    checkScore();
}
function clickBlueGem(){
    score = score + randNum2
    totalScoreText.textContent = score;
    checkScore();
}

function clickYellowGem(){
    score = score + randNum3
    totalScoreText.textContent = score;
    checkScore();
}
function clickGreenGem(){
    score = score + randNum4
    totalScoreText.textContent = score;
    checkScore();
}



start();








