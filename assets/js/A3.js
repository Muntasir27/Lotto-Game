(function(){
	// Variable for the wrapper
	var element = document.getElementById("wrapper02");

	// Creating the error msg variable
	var errorMsg = document.createElement("p");
	errorMsg.id = "errorMsgs";
	element.appendChild(errorMsg);

	// Play messages
	var playMsg01 = document.createElement("p");
	playMsg01.id = "playMsg01id";
	element.appendChild(playMsg01);

	var playMsg02 = document.createElement("p");
	playMsg02.id = "playMsg02id";
	element.appendChild(playMsg02);

	// Create my tables
	var myTable = document.createElement("TABLE");
	myTable.setAttribute("id", "myTableID");
	element.appendChild(myTable);

	// Create Texts and Tables for randoms
	var randMsg01 = document.createElement("p");
	randMsg01.id = "randMsg01";
	element.appendChild(randMsg01);

	var randTable01 = document.createElement("TABLE");
	randTable01.setAttribute("id" , "rndTable01")
	randTable01.setAttribute("class" , "rndTable")
	element.appendChild(randTable01);

	var randMsg02 = document.createElement("p");
	randMsg02.id = "randMsg02";
	element.appendChild(randMsg02);

	var randTable02 = document.createElement("TABLE");
	randTable02.setAttribute("id" , "rndTable02")
	randTable02.setAttribute("class" , "rndTable")
	element.appendChild(randTable02);

	var randMsg03 = document.createElement("p");
	randMsg03.id = "randMsg03";
	element.appendChild(randMsg03);

	var randTable03 = document.createElement("TABLE");
	randTable03.setAttribute("id" , "rndTable03")
	randTable03.setAttribute("class" , "rndTable")
	element.appendChild(randTable03);

    // Try again
	var tryAgain = document.createElement("p");
	tryAgain.id = "tryAgainMsg";
	element.appendChild(tryAgain);

	// score messages
	var match00 = document.createTextNode("no matches");
	var match01 = document.createTextNode("no prize for 1 match");
	var match02 = document.createTextNode("no prize for 2 matches");
	var match03 = document.createTextNode("3 matches win $10");
	var match04 = document.createTextNode("4 matches win $1,000");
	var match05 = document.createTextNode("5 matches win $100,000!");
	var match06 = document.createTextNode("6 matches win $1,000,000!!!");

	var match10 = document.createTextNode("no matches");
	var match11 = document.createTextNode("no prize for 1 match");
	var match12 = document.createTextNode("no prize for 2 matches");
	var match13 = document.createTextNode("3 matches win $10");
	var match14 = document.createTextNode("4 matches win $1,000");
	var match15 = document.createTextNode("5 matches win $100,000!");
	var match16 = document.createTextNode("6 matches win $1,000,000!!!");

	var match20 = document.createTextNode("no matches");
	var match21 = document.createTextNode("no prize for 1 match");
	var match22 = document.createTextNode("no prize for 2 matches");
	var match23 = document.createTextNode("3 matches win $10");
	var match24 = document.createTextNode("4 matches win $1,000");
	var match25 = document.createTextNode("5 matches win $100,000!");
	var match26 = document.createTextNode("6 matches win $1,000,000!!!");

	// Create variables for message
	var lessSix = document.createTextNode("ERROR : Fewer than 6 numbers selected");
	var moreSix = document.createTextNode("ERROR : More than 6 numbers selected");


	window.onload = function (){

		// Click event handler on PLAY LOTTO
		document.getElementById("playLotto").addEventListener("click", clickBtn);

	};

	function clickBtn(){

		var myquickPick = [];

		// Randoms of CPU
		var rand01 = [];
		var rand02 = [];
		var rand03 = [];

		var cpuQuickPick01 = [];
		var cpuQuickPick02 = [];
		var cpuQuickPick03 = [];

		for ( i = 1 ; i <= 49; i++){

			rand01.push(i);
			rand02.push(i);
			rand03.push(i);
		};

		for ( i =1 ; i <=6; i++ ){

			var cpuRand01 = Math.floor( Math.random() * (rand01.length) ) ;
			var cpuRand02 = Math.floor( Math.random() * (rand02.length) ) ;
			var cpuRand03 = Math.floor( Math.random() * (rand03.length) ) ;

			var spliceNum01 = (rand01.splice(cpuRand01,1));
			var spliceNum02 = (rand02.splice(cpuRand02,1));
			var spliceNum03 = (rand03.splice(cpuRand03,1));

			cpuQuickPick01 = cpuQuickPick01.concat(spliceNum01);
			cpuQuickPick02 = cpuQuickPick02.concat(spliceNum02);
			cpuQuickPick03 = cpuQuickPick03.concat(spliceNum03);

		}

		cpuQuickPick01.sort(function(a,b) { return  a-b });
		cpuQuickPick02.sort(function(a,b) { return  a-b });
		cpuQuickPick03.sort(function(a,b) { return  a-b });

		// Get value from radio btn
		var yesNo = document.querySelector('input[name="choice"]:checked').value;

		// Get value from dropDownList
		var playNum = document.getElementById('dropDownList').value;
		var playNumText = document.createTextNode(playNum);

		// Creating texts for quickPick and myNumbers
		var quickPickText = document.createTextNode("Quick pick selected - your numbers are:");
		var myPickText = document.createTextNode("You picked the following numbers:");

		var rndPick01 = document.createTextNode("Numbers drawn in first play: ");
		var rndPick02 = document.createTextNode("Numbers drawn in second play: ");
		var rndPick03 = document.createTextNode("Numbers drawn in third play: ");

		var tryagain = document.createTextNode("Try again! What do you have to lose?");

		var numPlaysMsg = document.createTextNode("Number of play is ");

		// Get values from checkboxes
		var myCheckboxes = document.getElementsByName('numbers');

		// Variable for the number picked from checkboxes
		var myNumbers = [];

		for(var i=0; i< myCheckboxes.length ; i++){

			if(myCheckboxes[i].checked){

				myNumbers.push(myCheckboxes[i].value)

			}
		}

		// Sorting numbers and use of the function because the .sort() is mainly for alphabetical order
		myNumbers.sort(function(a,b) { return  a-b });

		// var scndWrapper = document.getElementById("wrapper02");
		if((myNumbers.length < 6) && (yesNo === "no")){

			document.getElementById("playMsg02id").innerHTML = "";
			document.getElementById("playMsg01id").innerHTML ="";
			document.getElementById("errorMsgs").innerHTML ="";
			document.getElementById("randMsg01").innerHTML = "";
			document.getElementById("randMsg02").innerHTML = "";
			document.getElementById("randMsg03").innerHTML = "";
			document.getElementById("myTableID").innerHTML = "";
			document.getElementById("rndTable01").innerHTML = "";
			document.getElementById("rndTable02").innerHTML = "";
			document.getElementById("rndTable03").innerHTML = "";
			document.getElementById("tryAgainMsg").innerHTML = "";
			errorMsg.appendChild(lessSix);

		} else if((myNumbers.length > 6) && (yesNo === "no")){

			document.getElementById("errorMsgs").innerHTML ="";
			document.getElementById("playMsg01id").innerHTML ="";
			document.getElementById("playMsg02id").innerHTML = "";
			document.getElementById("randMsg01").innerHTML = "";
			document.getElementById("randMsg02").innerHTML = "";
			document.getElementById("randMsg03").innerHTML = "";
			document.getElementById("myTableID").innerHTML = "";
			document.getElementById("rndTable01").innerHTML = "";
			document.getElementById("rndTable02").innerHTML = "";
			document.getElementById("rndTable03").innerHTML = "";
			document.getElementById("tryAgainMsg").innerHTML = "";
			errorMsg.appendChild(moreSix);

		} else if((myNumbers.length === 6) && (yesNo === "no")){

			// Make the PLAY LOTTO 'null' after click
			document.getElementById("playLotto").removeEventListener("click", clickBtn);

			// Appending texts
			document.getElementById("errorMsgs").innerHTML ="";
			document.getElementById("playMsg01id").innerHTML ="";
			document.getElementById("playMsg02id").innerHTML = "";


			playMsg01.appendChild(numPlaysMsg);
			playMsg01.appendChild(playNumText);
			playMsg02.appendChild(myPickText);

			// showing myNumbers if NO is picked
			var mytableData = "";
			for (var i = 0 in myNumbers) {

				// console.log(quickPick[i]);
				mytableData  += "<td>" + myNumbers[i] + "</td>";

			};
			document.getElementById('myTableID').innerHTML = mytableData;

		}else if(yesNo === "yes"){

			// Make the PLAY LOTTO 'null' after click
			document.getElementById("playLotto").removeEventListener("click", clickBtn);

			// Appending texts
			document.getElementById("errorMsgs").innerHTML ="";
			document.getElementById("playMsg01id").innerHTML ="";
			document.getElementById("playMsg02id").innerHTML = "";
			playMsg01.appendChild(numPlaysMsg);
			playMsg01.appendChild(playNumText);
			playMsg02.appendChild(quickPickText);

			// Showing myNumbers if YES is picked
			// Declaring an empty array and pushing the whole numbers into it
			var wholeNum = [];


			for ( i = 1 ; i <= 49; i++){
				wholeNum.push(i);
			};

			// For loop to grab 6 randoms from the WholeNum array and put them in quick pick array
			for ( i =1 ; i <=6; i++ ){

				var randomNumbers = Math.floor( Math.random() * (wholeNum.length) ) ;

				var spliceNum = (wholeNum.splice(randomNumbers,1));

				myquickPick = myquickPick.concat(spliceNum);

			}

			// Sorting numbers and use of the function because the .sort() is mainly for alphabetical order
			myquickPick.sort(function(a,b) { return  a-b });

			// showing myNumbers if NO is picked
			var mytableData = "";
			for (var i = 0 in myquickPick) {

				mytableData  += "<td>" + myquickPick[i] + "</td>";

			};
			document.getElementById('myTableID').innerHTML = mytableData;

		} ;

		if ((playNum === "1")  && ((yesNo === "yes") || ((yesNo === "no") && (myNumbers.length === 6)) )) {

			document.getElementById("randMsg01").innerHTML = "";
			randMsg01.appendChild(rndPick01);

			var randTable01 = "";
			for (var i = 0 in cpuQuickPick01) {

				// console.log(quickPick[i]);
				randTable01  += "<td>" + cpuQuickPick01[i] + "</td>";

			};
			document.getElementById('rndTable01').innerHTML = randTable01;

			document.getElementById("tryAgainMsg").innerHTML = "";

		} else if ((playNum === "2")  && ((yesNo === "yes") || ((yesNo === "no") && (myNumbers.length === 6)) )) {

			// Rand01
			document.getElementById("randMsg01").innerHTML = "";
			randMsg01.appendChild(rndPick01);

			var randTable01 = "";
			for (var i = 0 in cpuQuickPick01) {

				// console.log(quickPick[i]);
				randTable01  += "<td>" + cpuQuickPick01[i] + "</td>";

			};
			document.getElementById('rndTable01').innerHTML = randTable01;

			// Rand02
			document.getElementById("randMsg02").innerHTML = "";
			randMsg02.appendChild(rndPick02);

			var randTable02 = "";
			for (var i = 0 in cpuQuickPick02) {

				// console.log(quickPick[i]);
				randTable02  += "<td>" + cpuQuickPick02[i] + "</td>";

			};
			document.getElementById('rndTable02').innerHTML = randTable02;

			document.getElementById("tryAgainMsg").innerHTML = "";


		} else if ((playNum === "3")  && ((yesNo === "yes") || ((yesNo === "no") && (myNumbers.length === 6)) )) {

			// Rand01
			document.getElementById("randMsg01").innerHTML = "";
			randMsg01.appendChild(rndPick01);

			var randTable01 = "";
			for (var i = 0 in cpuQuickPick01) {

				// console.log(quickPick[i]);
				randTable01  += "<td>" + cpuQuickPick01[i] + "</td>";

			};
			document.getElementById('rndTable01').innerHTML = randTable01;

			// Rand02
			document.getElementById("randMsg02").innerHTML = "";
			randMsg02.appendChild(rndPick02);

			var randTable02 = "";
			for (var i = 0 in cpuQuickPick02) {

				// console.log(quickPick[i]);
				randTable02  += "<td>" + cpuQuickPick02[i] + "</td>";

			};
			document.getElementById('rndTable02').innerHTML = randTable02;

			// Rand03
			document.getElementById("randMsg03").innerHTML = "";
			randMsg03.appendChild(rndPick03);

			var randTable03 = "";
			for (var i = 0 in cpuQuickPick03) {

				// console.log(quickPick[i]);
				randTable03  += "<td>" + cpuQuickPick03[i] + "</td>";

			};
			document.getElementById('rndTable03').innerHTML = randTable03;

			document.getElementById("tryAgainMsg").innerHTML = "";

		};

		// if the length or random tables === 6
		var myTableValue = document.getElementById("myTableID").rows[0];
		var rand01Value = document.getElementById("rndTable01").rows[0];
		var rand02Value = document.getElementById("rndTable02").rows[0];
		var rand03Value = document.getElementById("rndTable03").rows[0];

		var matchFirst = [];
		var matchSecond = [];
		var matchThird = [];

		if (playNum === "1" && (myNumbers.length === 6 || myquickPick.length === 6)) {

			document.getElementById("rndTable02").innerHTML = "";
			document.getElementById("rndTable03").innerHTML = "";
			document.getElementById("randMsg02").innerHTML = "";
			document.getElementById("randMsg03").innerHTML = "";

			setTimeout(function(){

				for (var i = 0; i < 6 ; i++) {

					if((myTableValue.cells[0].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[1].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[2].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[3].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[4].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[5].innerHTML === rand01Value.cells[i].innerHTML)) {

							rand01Value.cells[i].style.backgroundColor = "beige"
							matchFirst.push(rand01Value.cells[i].innerHTML);

					};
				};

				if(matchFirst.length === 0){
					randMsg01.appendChild(match00);
				} else if (matchFirst.length === 1) {
					randMsg01.appendChild(match01);
				} else if (matchFirst.length === 2) {
					randMsg01.appendChild(match02);
				} else if (matchFirst.length === 3) {
					randMsg01.appendChild(match03);
				} else if (matchFirst.length === 4) {
					randMsg01.appendChild(match04);
				} else if (matchFirst.length === 5) {
					randMsg01.appendChild(match05);
				} else if (matchFirst.length === 6) {
					randMsg01.appendChild(match06);
				}

			}, 1500);

			setTimeout(function(){

				if((myNumbers.length === 6) || (myquickPick.length === 6)  ){

					document.getElementById("playLotto").addEventListener("click", clickBtn);

					for (var i = 0; i < myCheckboxes.length; i++) {
						myCheckboxes[i].checked = false;
					};

					document.getElementById("no").checked = true;

					document.getElementById('dropDownList').value = 1;

				};

				tryAgain.appendChild(tryagain);

			},2000);

		} else if((playNum === "2") && (myNumbers.length === 6 || myquickPick.length === 6)){


			document.getElementById("rndTable03").innerHTML = "";
			document.getElementById("randMsg03").innerHTML = "";

			setTimeout(function(){

				for (var i = 0; i < 6 ; i++) {

					if((myTableValue.cells[0].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[1].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[2].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[3].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[4].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[5].innerHTML === rand01Value.cells[i].innerHTML)) {

							rand01Value.cells[i].style.backgroundColor = "beige";
							matchFirst.push(rand01Value.cells[i].innerHTML);

					};
				};

				if(matchFirst.length === 0){
					randMsg01.appendChild(match00);
				} else if (matchFirst.length === 1) {
					randMsg01.appendChild(match01);
				} else if (matchFirst.length === 2) {
					randMsg01.appendChild(match02);
				} else if (matchFirst.length === 3) {
					randMsg01.appendChild(match03);
				} else if (matchFirst.length === 4) {
					randMsg01.appendChild(match04);
				} else if (matchFirst.length === 5) {
					randMsg01.appendChild(match05);
				} else if (matchFirst.length === 6) {
					randMsg01.appendChild(match06);
				}

			}, 1500);

			setTimeout(function(){

				for (var i = 0; i < 6 ; i++) {

					if((myTableValue.cells[0].innerHTML === rand02Value.cells[i].innerHTML) ||
						(myTableValue.cells[1].innerHTML === rand02Value.cells[i].innerHTML) ||
						(myTableValue.cells[2].innerHTML === rand02Value.cells[i].innerHTML) ||
						(myTableValue.cells[3].innerHTML === rand02Value.cells[i].innerHTML) ||
						(myTableValue.cells[4].innerHTML === rand02Value.cells[i].innerHTML) ||
						(myTableValue.cells[5].innerHTML === rand02Value.cells[i].innerHTML)) {

							rand02Value.cells[i].style.backgroundColor = "beige";
							matchSecond.push(rand02Value.cells[i].innerHTML);

					};
				};

				if(matchSecond.length === 0){
					randMsg02.appendChild(match10);
				} else if (matchSecond.length === 1) {
					randMsg02.appendChild(match11);
				} else if (matchSecond.length === 2) {
					randMsg02.appendChild(match12);
				} else if (matchSecond.length === 3) {
					randMsg02.appendChild(match13);
				} else if (matchSecond.length === 4) {
					randMsg02.appendChild(match14);
				} else if (matchSecond.length === 5) {
					randMsg02.appendChild(match15);
				} else if (matchSecond.length === 6) {
					randMsg02.appendChild(match16);
				}

			}, 3000);

			setTimeout(function(){

				if((myNumbers.length === 6) || (myquickPick.length === 6)  ){

					document.getElementById("playLotto").addEventListener("click", clickBtn);

					for (var i = 0; i < myCheckboxes.length; i++) {
						myCheckboxes[i].checked = false;
					};

					document.getElementById("no").checked = true;

					document.getElementById('dropDownList').value = 1;

				};

				tryAgain.appendChild(tryagain);

			},3500);

		} else if((playNum === "3") && (myNumbers.length === 6 || myquickPick.length === 6)){

			setTimeout(function(){

				for (var i = 0; i < 6 ; i++) {

					if((myTableValue.cells[0].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[1].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[2].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[3].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[4].innerHTML === rand01Value.cells[i].innerHTML) ||
						(myTableValue.cells[5].innerHTML === rand01Value.cells[i].innerHTML)) {

							rand01Value.cells[i].style.backgroundColor = "beige";
							matchFirst.push(rand01Value.cells[i].innerHTML);

					};
				};

				if(matchFirst.length === 0){
					randMsg01.appendChild(match00);
				} else if (matchFirst.length === 1) {
					randMsg01.appendChild(match01);
				} else if (matchFirst.length === 2) {
					randMsg01.appendChild(match02);
				} else if (matchFirst.length === 3) {
					randMsg01.appendChild(match03);
				} else if (matchFirst.length === 4) {
					randMsg01.appendChild(match04);
				} else if (matchFirst.length === 5) {
					randMsg01.appendChild(match05);
				} else if (matchFirst.length === 6) {
					randMsg01.appendChild(match06);
				}

			}, 1500);

			setTimeout(function(){

				for (var i = 0; i < 6 ; i++) {

					if((myTableValue.cells[0].innerHTML === rand02Value.cells[i].innerHTML) ||
						(myTableValue.cells[1].innerHTML === rand02Value.cells[i].innerHTML) ||
						(myTableValue.cells[2].innerHTML === rand02Value.cells[i].innerHTML) ||
						(myTableValue.cells[3].innerHTML === rand02Value.cells[i].innerHTML) ||
						(myTableValue.cells[4].innerHTML === rand02Value.cells[i].innerHTML) ||
						(myTableValue.cells[5].innerHTML === rand02Value.cells[i].innerHTML)) {

							rand02Value.cells[i].style.backgroundColor = "beige";
							matchSecond.push(rand02Value.cells[i].innerHTML);

					};
				};

				if(matchSecond.length === 0){
					randMsg02.appendChild(match10);
				} else if (matchSecond.length === 1) {
					randMsg02.appendChild(match11);
				} else if (matchSecond.length === 2) {
					randMsg02.appendChild(match12);
				} else if (matchSecond.length === 3) {
					randMsg02.appendChild(match13);
				} else if (matchSecond.length === 4) {
					randMsg02.appendChild(match14);
				} else if (matchSecond.length === 5) {
					randMsg02.appendChild(match15);
				} else if (matchSecond.length === 6) {
					randMsg02.appendChild(match16);
				}

			}, 3000);

			setTimeout(function(){

				for (var i = 0; i < 6 ; i++) {

					if((myTableValue.cells[0].innerHTML === rand03Value.cells[i].innerHTML) ||
						(myTableValue.cells[1].innerHTML === rand03Value.cells[i].innerHTML) ||
						(myTableValue.cells[2].innerHTML === rand03Value.cells[i].innerHTML) ||
						(myTableValue.cells[3].innerHTML === rand03Value.cells[i].innerHTML) ||
						(myTableValue.cells[4].innerHTML === rand03Value.cells[i].innerHTML) ||
						(myTableValue.cells[5].innerHTML === rand03Value.cells[i].innerHTML)) {

							rand03Value.cells[i].style.backgroundColor = "beige"
							matchThird.push(rand03Value.cells[i].innerHTML);

					};
				};

				if(matchThird.length === 0){
					randMsg03.appendChild(match20);
				} else if (matchThird.length === 1) {
					randMsg03.appendChild(match21);
				} else if (matchThird.length === 2) {
					randMsg03.appendChild(match22);
				} else if (matchThird.length === 3) {
					randMsg03.appendChild(match23);
				} else if (matchThird.length === 4) {
					randMsg03.appendChild(match24);
				} else if (matchThird.length === 5) {
					randMsg03.appendChild(match25);
				} else if (matchThird.length === 6) {
					randMsg03.appendChild(match26);
				}

			}, 4500);


			setTimeout(function(){

				if((myNumbers.length === 6) || (myquickPick.length === 6)  ){

					document.getElementById("playLotto").addEventListener("click", clickBtn);

					for (var i = 0; i < myCheckboxes.length; i++) {
						myCheckboxes[i].checked = false;
					};

					document.getElementById("no").checked = true;

					document.getElementById('dropDownList').value = 1;

				};

				tryAgain.appendChild(tryagain);

			},5000);
		};

	};

}());
