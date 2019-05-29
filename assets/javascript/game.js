$(document).ready(function () {
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

		console.log("random number to get selected: " + randNumber);

	}

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}
    
		console.log("crystal numbers: " + crystalNumbers);

	} 

	function crystalValues(arr) {

		for (i = 0; i < arr.length; i++) {

		$("#crystalBtn-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		crystal1 = arr[0];
		crystal2 = arr[1];
		crystal3 = arr[2];
		crystal4 = arr[3];
	}

	function gameReset(x) {

		crystalNumbers = []; 

		pickRandomNumber(rand);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	}

	pickRandomNumber(rand);
	pickRandomCrystals(crystals); 
	crystalValues(crystalNumbers);

	$("#crystalBtn-1").on("click", function() {

		totalScore += crystal1;
		$("#totalNumber").html(totalScore);
	});

	$("#crystalBtn-2").on("click", function() {

		totalScore += crystal2;
		$("#totalNumber").html(totalScore);
	});

	$("#crystalBtn-3").on("click", function() {

		totalScore += crystal3;
		$("#totalNumber").html(totalScore);
	});

	$("#crystalBtn-4").on("click", function() {

		totalScore += crystal4;
		$("#totalNumber").html(totalScore);
	});

$("button").on("click", function() {
	
	if (totalScore == randNumber) {

		wins++;
		console.log(totalScore);
		$("#totalNumber").html(totalScore);
		$("#wins").html("Wins: " + wins);


		setTimeout(function() {gameReset("YOU WIN!!")}, 200);
	}

	else if (totalScore > randNumber){

		losses++;
		$("#totalNumber").html(totalScore);
		$("#losses").html("Losses: " + losses);

		setTimeout(function() {gameReset("YOU LOSE!")}, 200);
	}
});

});