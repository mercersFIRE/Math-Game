let problemStatement = document.querySelector(".problemStatement");
let ourForm = document.querySelector(".ourForm");
let ourField = document.querySelector(".ourField");
let scoreComment = document.querySelector(".scoreComment");
let popupText = document.querySelector(".popupText");
let startAgain = document.querySelector(".startAgain");
let popup = document.querySelector(".popup");
let firstBlur = document.querySelector(".firstBlur");
let head = document.querySelector(".head");


let no1, no2, right = 0, wrong = 0;
let sign;
updateProblem();
updateScore();
function updateProblem() {
    no1 = Math.floor(Math.random() * 11);
    no2 = Math.floor(Math.random() * 11);
    sign = ['+', '-', 'x'][Math.floor(Math.random() * 3)]
    ourField.focus();
    updateScore();
    problemStatement.innerHTML = `${no1} ${sign} ${no2}`;
}


ourForm.addEventListener("submit", checkAnswer)

function checkAnswer(e) {
    e.preventDefault();
    let answer = (sign == '+' ? no1 + no2 : (sign == '-' ? no1 - no2 : no1 * no2));
    (ourField.value == answer ? rightAnswer : wrongAnswer)();

}
function rightAnswer() {
    problemStatement.classList.add("animate__zoomOut");
    problemStatement.classList.add("rightAnswer")
    
    setTimeout(() => {
        problemStatement.classList.remove("animate__zoomOut");
        problemStatement.classList.remove("rightAnswer");
        
        right++;
        updateProblem();
        ourField.value = "";
        if (right == 10) popupWindow("Congrats! You have won")
        updateScore();
    }, 1000);
}
function wrongAnswer() {
    problemStatement.classList.add("wrongAnswer");
    problemStatement.classList.add("animate__headShake");
    wrong++;
    ourField.value = "";
    ourField.focus();
    setTimeout(() => {
        problemStatement.classList.remove("wrongAnswer");
        problemStatement.classList.remove("animate__headShake");
    }, 500);
    if (wrong == 3) popupWindow("Sorry, You have lost");
    updateScore();
}
function popupWindow(msg) {
    popup.classList.remove("hidden");
    popup.classList.add("visible");
    firstBlur.classList.add("toBlur");
    popupText.innerHTML = msg;
    startAgain.focus();
}
function updateScore() {
    scoreComment.innerHTML = `${10 - right} more points to win, and ${2 - wrong} mistakes remaining`;
}

startAgain.addEventListener("click", reset);

function reset() {
    popup.classList.remove("visible");
    popup.classList.add("hidden");
    firstBlur.classList.remove("toBlur");
    right = 0;
    wrong = 0;
    updateProblem();
}