var wins = 0;
var guessesRemaining = 5;
var currentWord = [];
var currentDisplay = [];
var wrongLettersGuessed = [];
var lettersGuessed = [];
var currentGuess = "";
var index = 0;
var placeholderPicture = "<img src='./assets/images/world-cup.jpg' alt='placeholder'>"

var hangmanGame = {
	wordsToGuess: [{
		word: "GERMANY",
		src: "./assets/images/germany.jpeg"
	}, {
		word: "BRAZIL",
		src: "./assets/images/brazil.jpg"
	}],

	setCurrentWord: function() {
		// console.log(this.wordsToGuess[index].word);

		var word = this.wordsToGuess[index].word;
		
		for (var i = 0; i < word.length; i++) {
			currentWord.push(word.charAt(i));
		}

		// console.log(currentWord);

	},

	setCurrentDisplay: function() {

		for (var j = 0; j < currentWord.length; j++) {
			currentDisplay.push("_");
		}

		// console.log(currentDisplay);
	},

	setWrongLettersGuessed: function(wrongLetter) {
		// console.log(wrongLetter);
		wrongLettersGuessed.push(wrongLetter.toUpperCase());
		// console.log(wrongLettersGuessed);
	},

	setLettersGuessed: function(letter) {
		lettersGuessed.push(letter.toUpperCase());
	},

	displayHangmanWord: function() {
		var hangmanWord = currentDisplay.join(" ");

		document.querySelector("#hangman-word").innerHTML = hangmanWord;
	},

	displayGuessesRemaining: function() {
		document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
	},

	displayWins: function() {
		document.querySelector("#wins").innerHTML = wins;
	},

	displayWrongLettersGuessed: function() {
		document.querySelector("#already-guessed").innerHTML = wrongLettersGuessed.join(" , ");
	},

	checkWinLoss: function() {
		if (currentDisplay.indexOf("_") === -1) {
			document.querySelector("#instructions").innerHTML = "You won! Click any key for the next word";
			document.querySelector("#image").innerHTML = "<img src=" + this.wordsToGuess[index].src + ">";
		}
		else if (guessesRemaining === 0) {
			document.querySelector("#instructions").innerHTML = "You lost. Click any key for the next word";
			document.querySelector("#image").innerHTML = "<img src=" + this.wordsToGuess[index].src + ">";
		}
	}
};

function startGame() {
	document.querySelector("#image").innerHTML = placeholderPicture;
	hangmanGame.setCurrentWord();
	hangmanGame.setCurrentDisplay();
	hangmanGame.displayHangmanWord();
	hangmanGame.displayGuessesRemaining();
}

document.onkeyup = function(event) {

	// If there are guesses remaining AND the word has not been guessed
	// then let's keep playing
	if (guessesRemaining > 0 && currentDisplay.indexOf("_") !== -1) {
		var userGuess = event.key.toUpperCase();
		
		// If the user picks a letter for the first time, then check their guess
		if (lettersGuessed.indexOf(userGuess) === -1) {
			console.log(userGuess);
			hangmanGame.setLettersGuessed(userGuess);

			// If guess is wrong...
			if (currentWord.indexOf(userGuess) === -1) {

				// Add the letter to wrong letters guessed group
				hangmanGame.setWrongLettersGuessed(userGuess);
				
				// Update wrong letters guessed
				hangmanGame.displayWrongLettersGuessed();

				// Update guesses remaining
				guessesRemaining--;
				hangmanGame.displayGuessesRemaining();
			}
			// If the guess is correct...
			else {
				// Update the currentDisplay variable by...
				
				// Finding the first instance of the letter in the word
				var userGuessIndex = currentWord.indexOf(userGuess);

				// Continue looping through the currentWord array until you find ALL
				// instances of the letter in the word	
				while(userGuessIndex !== -1) {

					// Set the hangman word to contain your new guess
					currentDisplay[userGuessIndex] = userGuess;
					// Start the letter search AFTER the last instance
					userGuessIndex =  currentWord.indexOf(userGuess, userGuessIndex + 1);
				}

				// Display to the screen the new hangman word
				document.querySelector("#hangman-word").innerHTML = currentDisplay.join(" ");
			}
		}

		hangmanGame.checkWinLoss();
	}
	// If there are no guesses remaning, then move on to the next word
	else {
		// Check if win OR loss
		guessesRemaining = 5;
		console.log("next word");
	}
}

startGame();


