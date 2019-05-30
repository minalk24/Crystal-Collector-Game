$(document).ready(function () {

	//variable declare and initialize
	var randomNumberPick;
	var crystalNumbers = [];

	var crystal1;
	var crystal2;
	var crystal3;
	var crystal4;
	var totalScore = 0;

	var wins = 0;
	var losses = 0;

	//random number variable and loop for Computer guess
	var randomEmptyArr = [];
	for (var i = 19; i < 121; i++) {
		randomEmptyArr.push(i);
	}
	//random crystal variable and loop for Player
	var crystalsEmptyArr = [];
	for (var j = 1; j < 13; j++) {
		crystalsEmptyArr.push(j);
	}

	//pick random number
	function pickRandomNumber(arr) {
		//for random number and assign to this value to variable and print to html
		var pickRandom = arr[Math.floor(Math.random() * arr.length)];
		randomNumberPick = pickRandom;
		$("#randomNumber").html(randomNumberPick);
		console.log("random number to get selected: " + randomNumberPick);
	}

	//assign random crystal value
	function pickRandomCrystals(arr) {
		//crystal random value
		for (var k = 0; k < 4; k++) {
			var crystalRandom = arr[Math.floor(Math.random() * arr.length)];
			crystalNumbers.push(crystalRandom);
		}
		console.log("crystal numbers: " + crystalNumbers);
	}

	function crystalValues(arr) {
		for (var i = 0; i < arr.length; i++) {
			$("#crystalBtn-" + (i + 1)).attr("value", arr[i]);
			console.log(this);
		}
		crystal1 = arr[0];
		crystal2 = arr[1];
		crystal3 = arr[2];
		crystal4 = arr[3];
	}

	function gameReset(pickRandom) {

		crystalNumbers = [];

		pickRandomNumber(randomEmptyArr);

		pickRandomCrystals(crystalsEmptyArr);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(pickRandom);
	}

	pickRandomNumber(randomEmptyArr);
	pickRandomCrystals(crystalsEmptyArr);
	crystalValues(crystalNumbers);

	$("#crystalBtn-1").on("click", function () {

		totalScore += crystal1;
		$("#totalNumber").html(totalScore);
	});

	$("#crystalBtn-2").on("click", function () {

		totalScore += crystal2;
		$("#totalNumber").html(totalScore);
	});

	$("#crystalBtn-3").on("click", function () {

		totalScore += crystal3;
		$("#totalNumber").html(totalScore);
	});

	$("#crystalBtn-4").on("click", function () {

		totalScore += crystal4;
		$("#totalNumber").html(totalScore);
	});

	//after button click following instructions will run
	$("button").on("click", function () {

		if (totalScore == randomNumberPick) {

			wins++;
			console.log(totalScore);
			console.log("wins: " + wins);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);
	
			setTimeout(function () { gameReset("YOU WIN!!") }, 200);
		}

		else if (totalScore > randomNumberPick) {

			losses++;
			console.log("losses: " + losses);
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function () { gameReset("YOU LOSE!") }, 200);
		}
	});

});