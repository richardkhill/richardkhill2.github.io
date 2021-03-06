window.onload = function () {

	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
	var categories;         // This stores an array of categories
	var chosenCategory;     // This is the category selected at random
	var word ;              // This is the random word that has been selected from the chosen category
	var guess ;             // This is the users guess
	var guesses = [ ];      // Users guesses are stored in array
	var lives ;             // Number of lives the user has
	var counter ;           // Number of correct guesses
	var space;              // Number of spaces in word '-'

	// Get elements
	var showLives = document.getElementById("mylives");
	var showCategory = document.getElementById("category");
	var showClue = document.getElementById("clue");
  


	// Displays the array using for loop
	var buttons = function () {
		myButtons = document.getElementById('buttons');
		letters = document.createElement('ul');

		for (var i = 0; i < alphabet.length; i++) {
			letters.id = 'alphabet';
			list = document.createElement('li');
			list.id = 'letter';
			list.innerHTML = alphabet[i];
			check();
			myButtons.appendChild(letters);
			letters.appendChild(list);
		}
	}
    
  
	// Random category is chosen
	var selectCat = function () {
		if (chosenCategory === categories[0]) {
			categoryName.innerHTML = "The chosen category is: Songs by Mumford and Sons";
		} 
		else if (chosenCategory === categories[1]) {
			categoryName.innerHTML = "The chosen category is: Names of the band members from Mumford and Sons";
		}
		else if (chosenCategory === categories[2]) {
			categoryName.innerHTML = "The chosen category is: Instruments used by Mumford and Sons";
		}
	}

	// Puts '-' instead of spaces
	result = function () {
		wordHolder = document.getElementById('hold');
		correct = document.createElement('ul');

		for (var i = 0; i < word.length; i++) {
			correct.setAttribute('id', 'my-word');
			guess = document.createElement('li');
			guess.setAttribute('class', 'guess');
			if (word[i] === "-") {
				guess.innerHTML = "-";
				space = 1;
			} 
			else {
				guess.innerHTML = "_";
			}

			guesses.push(guess);
			wordHolder.appendChild(correct);
			correct.appendChild(guess);
		}
	}
  
	// Displays number of lives
	comments = function () {
		showLives.innerHTML = "You have " + lives + " lives";
		if (lives < 1) {
			showLives.innerHTML = "Game Over";
			return;
		}
		for (var i = 0; i < guesses.length; i++) {
			if (counter + space === guesses.length) {
				showLives.innerHTML = "You Win!";
			}
		}
	}


	// OnClick Function
	check = function () {
		list.onclick = function () {
			guess = (this.innerHTML);
			this.setAttribute("class", "active");
			this.onclick = null;
			for (var i = 0; i < word.length; i++) {
				if (word[i] === guess) {
					guesses[i].innerHTML = guess;
					counter += 1;
				} 
			}
			var j = (word.indexOf(guess));
			if (j === -1) {
				lives -= 1;
				comments();
			} 
			else {
				comments();
			}
		}
	}
  
    
	// Plays the game
	play = function () {
		categories = [
			["timshel", "babel", "believe", "holland road", "ditmas", "the cave", "winter winds"],
			["marcus mumford", "ted dwane", "winston marshall", "ben lovett"],
			["guitar", "piano", "banjo", "double bass", "mandolin", "drum kit", "keyboard"]
		];

		chosenCategory = categories[Math.floor(Math.random() * categories.length)];
		word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
		word = word.replace(/\s/g, "-");
		console.log(word);
		buttons();

		guesses = [ ];
		lives = 10;
		counter = 0;
		space = 0;
		result();
		comments();
		selectCat();
		canvas();
	}

  play(); //Calls the play function
}