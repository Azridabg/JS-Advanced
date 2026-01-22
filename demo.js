import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

function guessGame() {
    const num = Math.floor(Math.random() * 100);
    const rl = readline.createInterface({ input, output });

    console.log("Let's play a game!");
    console.log("Guess a number between 0 and 99:");

    rl.on('line', (line) => {
        const guess = parseInt(line.trim());

        if (isNaN(guess)) {
            console.log("That's not a valid number. Try again:");
        } else if (guess < num) {
            console.log("Too low! Try again:");
        } else if (guess > num) {
            console.log("Too high! Try again:");
        } else {
            console.log("Correct! You guessed the number.");
            rl.close();
        }
    });
}

guessGame();



