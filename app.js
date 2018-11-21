let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random(3)*3)];
}

function convertToWord(choice) {
    if (choice === "r") return "Rock";
    if (choice === "p") return "Paper";
    return "Scissor";
}

function win(userChoice, compChoice) {
    userScore++; 
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const u = "user".fontsize(3).sub();
    const c = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${(u)} beats ${convertToWord(compChoice)}${(c)}. You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('green-glow');
        
    }, 300);
}

function lose(userChoice, compChoice) {
    compScore++; 
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const u = "user".fontsize(3).sub();
    const c = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${(u)} loses to ${convertToWord(compChoice)}${(c)}. You Lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('red-glow');
        
    }, 300);
}

function draw(userChoice, compChoice) {
    const u = "user".fontsize(3).sub();
    const c = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${(u)} equals ${convertToWord(compChoice)}${(c)}. You Draw!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('gray-glow');
        
    }, 300);
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        default:
            draw(userChoice, compChoice);
    }
}

function main(argument) {
    
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissor_div.addEventListener('click', function () {
        game("s");
    })
}

main();
