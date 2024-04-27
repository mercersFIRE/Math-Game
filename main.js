let problemStatement = document.querySelector(".problemStatement");
let ourForm = document.querySelector(".ourForm");
let ourField = document.querySelector(".ourField");
let scoreComment = document.querySelector(".scoreComment");


let no1, no2, right = 0, wrong = 0;
let sign;

updateProblem();
updateScore();
function updateProblem() {
    no1 = Math.floor(Math.random() * 11);
    no2 = Math.floor(Math.random() * 11);
    sign = ['+', '-', 'x'][Math.floor(Math.random() * 3)]
    problemStatement.innerHTML = `${no1} ${sign} ${no2}`;
}

ourForm.addEventListener("submit", checkAnswer)

function checkAnswer(e) {
    e.preventDefault();
    let answer = (sign == '+' ? no1 + no2 : (sign == '-' ? no1 - no2 : no1 * no2));
    (ourField.value == answer ? rightAnswer : wrongAnswer)();

}
function rightAnswer() {
    right++;
    updateProblem();
    ourField.value = "";
    updateScore();

}
function wrongAnswer() {
    wrong++;
    ourField.value="";
    updateScore();
}
function updateScore() {
    scoreComment.innerHTML = `Your need ${10 - right} more points to win, and allowed to make ${2 - wrong} mistakes`;
}