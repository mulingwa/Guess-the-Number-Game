let randomNumber = Math.floor(Math.random() * 100) + 1;
//initializing existing html elements
let guessField = document.getElementById('guessField');
let btn = document.getElementById('guessSubmit');
let previousGuess = document.getElementById('previousGuess');
//to tell if it's wrong/right
let lastResult = document.getElementById("lastResult");
let lowOrHi = document.getElementById("lowOrHi");
//array to hold the user's guesses
let userInput = [];
let guessCount = 1;
let results = document.getElementById("results");

function checkGuess() {
    //read the value of user's input 
    let userGuess = Number(guessField.value);
    // console.log(randomNumber)
    //add the user's inputs to an array for output
    userInput.push(userGuess);
    //check the user's input against the systems number
    if (userGuess === randomNumber) {
        lastResult.textContent = "Correct genius!!! The number is " + userGuess;
        lastResult.style.backgroundColor = "#008080";
        lowOrHi.textContent = ' ';
        gameOver();

    } else if (guessCount === 5) {
        lastResult.textContent = "GAME OVER!!!"
        previousGuess.textContent = " ";
        lowOrHi.textContent = " ";
        gameOver();
    } else {
        lastResult.textContent = "Wrong! Try again!";
        lastResult.style.backgroundColor = "#CA1F7B";
        previousGuess.textContent = "Previous guess: " + userInput;
        //figure out the range of the umber. Def for fun
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "The guess was too low!";
        } else {
            lowOrHi.textContent = "The guess was too high!";
        }
    }
    //auto increment on the number of tries to avoid infinite playing
    guessCount++;
    //reset the input textbox to no value
    guessField.value = " ";
}
//add interactivity.. false to avoid refreshing
btn.addEventListener('click', checkGuess, false);
//reset game
// on ending the game.. disable attribute for aesthetics/prevent user manipulation
function gameOver() {
    guessField.disabled = "true";
    btn.disabled = "true";
    //create a button to restart the game
    let restartButton = document.createElement("button");
    restartButton.innerHTML = "Restart Game";
    restartButton.style.color = "black";
    restartButton.style.fontWeight = "bold";
    restartButton.style.height = "1.7rem";
    restartButton.style.marginRight = "25%";
    restartButton.style.marginLeft = "40%";
    restartButton.style.backgroundColor = "white";
    results.appendChild(restartButton);

    function resetGame() {
        //restart the game again
        //true reloads from the server not cache.. false reloads from the cache
        document.location.reload(true);
    }
    restartButton.addEventListener("click", resetGame);
}