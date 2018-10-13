var wins = 0;
var winsText = document.getElementById("wins-text");
var losses = 0;
var lossesText = document.getElementById("losses-text");
var score = 0;
var totalScoreText = document.getElementById("totalScore-text");
randNumStart = Math.floor(Math.random() * 50)+50;
var randNumText = document.getElementById("randNum-text");


var redGemImage = document.getElementById("redGem");
var blueGemImage = document.getElementById("blueGem");
var yellowGemImage = document.getElementById("yellowGem");
var greenGemImage = document.getElementById("greenGem");


function start() {
    randNumText.textContent = randNumStart;

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    score = 0;
    totalScoreText.textContent = score;

    randNum1 = Math.floor(Math.random() * 10)+1;
    randNum3 = Math.floor(Math.random() * 10)+1;
    randNum2 = Math.floor(Math.random() * 10)+1;
    randNum4 = Math.floor(Math.random() * 10)+1;

    redGemImage = randNum1;
    blueGemImage = randNum2;
    yellowGemImage = randNum3;
    greenGemImage = randNum4;

    console.log(greenGemImage);
    console.log(redGemImage);
    console.log(blueGemImage);
    console.log(yellowGemImage);
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








