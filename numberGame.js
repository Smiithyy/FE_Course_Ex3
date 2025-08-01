//Generate a random number between 1 and 100
function generateRandomNumber() {
    let minNum = 1;
    let maxNum = 100;

    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

//Players guess
function getPlayerGuess() {
    let playerGuess;
    
    while(true) {
        const input = prompt("Guess the number between 1-100: ");
        playerGuess = Number(input);

        if(!Number.isNaN(playerGuess) && playerGuess >= 1 && playerGuess <= 100) {
            return playerGuess;
        }
        else {
            alert("Invalid guess. Please guess a number between 1-100")
        }
    }
}

//Compare player guess to target number
function checkGuess(playerGuess, numberToGuess) {
    if(playerGuess < numberToGuess) {
        return "Too low!";
    }
    else if(playerGuess > numberToGuess) {
        return "Too high!";
    }
    else {
        return "You guessed correctly!";
    }
}

//Play game
function game() {
    let numberToGuess = generateRandomNumber();
    let attempts = 0
    const maxAttempts = 10;
    let playing = true;
    let guessedCorrect = false;

    console.log("New game starting.....");
    console.log("Try to defeat the AI by guessing the number between 1 and 100!");
    console.log("You only have 10 lives so think carefully...");

    while(attempts < maxAttempts) {
        const playerGuess = getPlayerGuess();
        attempts++;

        const result = checkGuess(playerGuess, numberToGuess);
        console.log(`Your guess: ${playerGuess}`);
        console.log(`Attempt ${attempts}: ${result}`);

        if(result === "You guessed correctly!") {
            guessedCorrect = true;
            break;
        }
    }

    if(guessedCorrect) {
        console.log(`CONGRATULATIONS, You defeated the Evil AI in ${attempts} attempt(s)!`);
        const score = 100 - (attempts - 1) * 10;
        console.log(`You scored ${score} points!`);
    }
    else {
        console.log(`You've used all ${maxAttempts} attempts.`);
        console.log("The Evil AI has defeated you!");
        console.log(`The correct number was ${numberToGuess}`);
        console.log("Better luck next time!");
    }
}

//Ask player if they want to play again
function replay() {
    while(true) {
        const input = prompt("Would you like to take on the Evil AI again? (yes/no)").toLowerCase();
        if(input === "yes" || input === "y") {
            return true;
        }
        else if(input === "no" || input === "n") {
            return false;
        }
        else {
            alert("Please enter 'yes' or 'no'!");
        }
    }
}

function playGame() {
    console.log("Welcome to the Evil AI number guessing game!");
    do {
        game();
    } while (replay());

    console.log("Thanks for playing! Evil AI shutting down!");
}

playGame();
