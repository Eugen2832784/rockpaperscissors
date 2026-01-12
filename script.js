function getComputerChoice() {
  const choices = ["камень", "ножницы", "бумага"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, compChoice, score) {
  if (humanChoice === compChoice) {
    return `Ничья\nТеперь счет ${score.human} : ${score.computer}`;
  }

  const win =
    (humanChoice === "камень" && compChoice === "ножницы") ||
    (humanChoice === "ножницы" && compChoice === "бумага") ||
    (humanChoice === "бумага" && compChoice === "камень");

  if (win) {
    score.human++;
    return `Вы выиграли, у меня ${compChoice}\nТеперь счет ${score.human} : ${score.computer}`;
  } else {
    score.computer++;
    return `Вы проиграли, у меня ${compChoice}\nТеперь счет ${score.human} : ${score.computer}`;
  }
}

const menu = document.querySelector("#menu");
const scoreText = document.querySelector("#answer");
const winnerText = document.querySelector("#winner");

const score = { human: 0, computer: 0 };

menu.addEventListener("click", (event) => {
  const target = event.target;

  let humanChoice;

  if (target.id === "buttonRock") humanChoice = "камень";
  if (target.id === "buttonScissors") humanChoice = "ножницы";
  if (target.id === "buttonPaper") humanChoice = "бумага";

  if (!humanChoice) return;

  const compChoice = getComputerChoice();

  scoreText.textContent = playRound(humanChoice, compChoice, score);

  if (score.human === 3) {
    winnerText.textContent = "Вы победили, поздравляю!";
  } else if (score.computer === 3) {
    winnerText.textContent = "Вы проиграли";
  }
});
