function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3) + 1;
  switch (compChoice) {
    case 1:
      return "камень";

    case 2:
      return "ножницы";

    case 3:
      return "бумага";
  }
}

function getHumanChoice() {
  let answer = prompt("Камень ножницы бумага раз два три!");
  let humanChoice = answer.trim().toLowerCase();
  return humanChoice;
}

function playGame() {
  const score = { human: 0, computer: 0 };
  while (score.human !== 3 && score.computer !== 3) {
    const humanChoice = getHumanChoice();
    const compChoice = getComputerChoice();
    console.log(playRound(humanChoice, compChoice, score));
  }
  if (score.human === 3) {
    console.log("Вы победили, поздравляю!");
  } else if (score.computer === 3) {
    console.log("Вы проиграли");
  }
}

function playRound(humanChoice, compChoice, score) {
  if (humanChoice === compChoice) {
    return "Ничья";
  } else if (humanChoice === "камень" && compChoice === "бумага") {
    score.computer++;
    return `Вы проиграли, у меня ${compChoice}\nТеперь счет ${score.human} : ${score.computer}`;
  } else if (humanChoice === "ножницы" && compChoice === "камень") {
    score.computer++;
    return `Вы проиграли, у меня ${compChoice}\nТеперь счет ${score.human} : ${score.computer}`;
  } else if (humanChoice === "бумага" && compChoice === "ножницы") {
    score.computer++;
    return `Вы проиграли, у меня ${compChoice}\nТеперь счет ${score.human} : ${score.computer}`;
  } else if (humanChoice === "ножницы" && compChoice === "бумага") {
    score.human++;
    return `Вы выиграли, у меня ${compChoice}\nТеперь счет ${score.human} : ${score.computer}`;
  } else if (humanChoice === "камень" && compChoice === "ножницы") {
    score.human++;
    return `Вы выиграли, у меня ${compChoice}\nТеперь счет ${score.human} : ${score.computer}`;
  } else if (humanChoice === "бумага" && compChoice === "камень") {
    score.human++;
    return `Вы выиграли, у меня ${compChoice}\nТеперь счет ${score.human} : ${score.computer}`;
  }
}

playGame();
