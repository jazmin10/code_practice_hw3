var wins = 0;
var guessesRemaining = 5;
var currentWord = [];
var currentDisplay = [];
var wrongLettersGuessed = [];
var lettersGuessed = [];
var currentGuess = "";
var index = 0;

var hangmanGame = {
	wordsToGuess: [{
		word: "TEST",
		src: "./assets/images/world-cup.jpg"
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
	}
};



// hangmanGame.setCurrentWord();
// hangmanGame.setCurrentDisplay();
// hangmanGame.displayHangmanWord();
// hangmanGame.displayGuessesRemaining();
// hangmanGame.displayWins();

// hangmanGame.setWrongLettersGuessed("j");
// hangmanGame.displayLettersGuessed();
// hangmanGame.setWrongLettersGuessed("k");
// hangmanGame.displayLettersGuessed();

// hangmanGame.setLettersGuessed("L");
// console.log(lettersGuessed);
// hangmanGame.setLettersGuessed("t");
// console.log(lettersGuessed);



