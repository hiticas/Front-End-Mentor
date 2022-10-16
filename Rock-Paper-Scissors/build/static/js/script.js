const buttons = document.querySelectorAll(".pick");
const scoreEl = document.getElementById("score");
const main = document.getElementById("main");
const selection = document.getElementById("selection");
const reset = document.getElementById("reset");
const winner = document.getElementById("winner");

const userSelect = document.getElementById("user_select");
const computerSelect = document.getElementById("computer_select");

//modal buttons
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");

const choices = ["paper", "rock", "scissors"];
let score = 0;
let userChoise = undefined;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        userChoise = button.getAttribute("data-choice");

        checkWinner();
    });
});

reset.addEventListener("click", () => {
    main.style.display = "flex";
    selection.style.display = "none";
});

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

function checkWinner() {
    const computerChoice = pickRandomChoice();
    // update the view
    updateSelection(userSelect, userChoise);
    updateSelection(computerSelect, computerChoice);

    if (userChoise === computerChoice) {
        // draw
        winner.innerText = "draw";
    } else if (
        (userChoise === "paper" && computerChoice === "rock") ||
        (userChoise === "rock" && computerChoice === "scissors") ||
        (userChoise === "scissors" && computerChoice === "paper")
    ) {
        // user won
        updateScore(1);
        winner.innerText = "win";
    } else {
        // user lost
        updateScore(-1);
        winner.innerText = "lost";
    }

    // show the selection/ hide main
    main.style.display = "none";
    selection.style.display = "flex";
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore(value) {
    score += value;
    scoreEl.innerText = score;
}

function updateSelection(selectionEl, choise) {
    // class reset
    selectionEl.classList.remove("btn-paper");
    selectionEl.classList.remove("btn-rock");
    selectionEl.classList.remove("btn-scissors");

    // update img
    const img = selectionEl.querySelector("img");
    selectionEl.classList.add(`btn-${choise}`);
    img.src = `/static/media/icon-${choise}.svg`;
    img.alt = choise;
}
