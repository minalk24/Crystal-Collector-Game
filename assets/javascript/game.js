$(document).ready(function() {
    var rand = [];

	for (var r = 19; r < 121; r++) {
		rand.push(r);
    }
    var crystals = [];

	for (var c = 1; c < 13; c++) {

		crystals.push(c);
    }
    var randNumber; 
	var crystalNumbers = []; 

	var crystal1;
	var crystal2;
	var crystal3;
    var crystal4;
    var totalScore = 0; 

	var wins = 0;
    var losses = 0;
    
    function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

    } 
    pickRandomNumber(rand);
});