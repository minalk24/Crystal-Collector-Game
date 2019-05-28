$(document).ready(function(){

var randomNum = [];

for(var i=19; i<121; i++){
    randomNum.push(i);
}
//console.log(randomNum);

var crystals = [];

for(var j=1; j<13; j++){
    crystals.push(j);
}
//console.log(crystals);

var randomNo;
var crystalsNo = [];

var crystal1;
var crystal2;
var crystal3;
var crystal4;
var totalScore = 0;
var wins = 0;
var losses = 0;

function pickRandomNo(arr){
var r = arr[Math.floor(Math.random() * arr.length)];
randomNo = r;
$("#randomNumber").html(randomNo);
console.log(randomNo);
}

function pickRandomCrystals(arr){
    for (var m = 0; m < 4; m++){
        var c = arr[Math.floor(Math.random() * arr.length)];
        crystalsNo.push(c);
    }
        console.log(crystalsNo);
}

function valuesOfCrystals(arr){
    for (var k = 0; k < arr.length; k++) {
        $("#crystalBtn-" + (k+1)).attr("value", arr[k]);
        console.log(this);
    }
    crystal1 = arr[0];
    crystal1 = arr[1];
    crystal1 = arr[2];
    crystal1 = arr[3];
}

function resetGame(r){
 crystalsNo = [];
    pickRandomNo(randomNo);
    pickRandomCrystals(crystals);
    valuesOfCrystals(crystalsNo);
    totalScore = 0;
    $("#totalNo").html(totalScore);
    alert(r);
//reset end
}

 pickRandomNo(randomNo); 
// pickRandomCrystals(crystals); 
// valuesOfCrystals(crystalsNo);



});