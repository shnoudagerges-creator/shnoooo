let guessInput = document.getElementById("guessField");
let submit = document.getElementById("subt");
let msg = document.querySelector(".lowOrHi");
let restart = document.getElementById("restartBtn");
let msgLeft = document.querySelector(".guesses");
let msgRemaining = document.querySelector(".lastResult");

let attempts = 10;
let random = Math.floor(Math.random() * 100) + 1;

function endgame() {
    guessInput.disabled = true;
    submit.disabled = true;
    restart.style.display = "block";
}

submit.addEventListener("click", function (mazen) {
    mazen.preventDefault();

    let takenumber = Number(guessInput.value);

    if (guessInput.value === "" || takenumber < 1 || takenumber > 100) {
        alert("Enter number between 1 and 100");
    } else {
        attempts--;
        msgRemaining.textContent = attempts;
        msgLeft.textContent += takenumber + " ";

        if (takenumber === random) {
            msg.textContent = "You win!";
            endgame();
        } else if (takenumber < random) {
            msg.textContent = "Too low";
        } else {
            msg.textContent = "Too high";
        }

        if (attempts === 0 && takenumber !== random) {
            msg.textContent = "Game over! The number was " + random;
            endgame();
        }
    }

    guessInput.value = "";
});

restart.addEventListener("click", function () {
    attempts = 10;
    random = Math.floor(Math.random() * 100) + 1;

    guessInput.disabled = false;
    submit.disabled = false;
    restart.style.display = "none";

    msgLeft.textContent = "";
    msgRemaining.textContent = attempts;
    msg.textContent = "";
    guessInput.value = "";
});