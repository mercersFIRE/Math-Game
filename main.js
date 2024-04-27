let problemStatement = document.querySelector(".problemStatement");
let ourForm = document.querySelector(".ourForm");
let ourField = document.querySelector(".ourField");


let no1,no2;
let sign;

function updateProblem() {
    no1 = Math.floor(Math.random() * 101);
    no2 = Math.floor(Math.random() * 101);
    sign = ['+', '-', 'x'][Math.floor(Math.random() * 3)]
    problemStatement.innerHTML = `${no1} ${sign} ${no2}`;
}
updateProblem();
ourForm.addEventListener("submit", checkAnswer)

function checkAnswer(e) {
    e.preventDefault();
    alert(ourField.value)
    let answer=(sign=='+'?no1+no2:(sign=='-'?no1-no2:no1*no2));
    if(ourField.value==answer)alert("Correct");
    else
    alert("wrong");

}