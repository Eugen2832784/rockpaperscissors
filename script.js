function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3) + 1;
  switch (compChoice) {
    case 1:
      return "камень";
      break;
    case 2:
      return "ножницы";
      break;
    case 3:
      return "бумага";
      break;
  }
}

function getHumanChoice() {
  let answer = prompt("Камень ножницы бумага раз два три!");
  let humanChoice = answer.trim().toLowerCase();
  return humanChoice;
}

function playGame() {
  let humanChoice = getHumanChoice();
  let compChoice = getComputerChoice();
  let humanScore = 0;
  let computerScore = 0;
  while (humanScore != 3 || computerScore != 3) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }
  if (humanScore == 3) {
    console.log("Вы победили, поздравляю!");
  } else if (computerScore == 3) {
    console.log("Вы проиграли");
  }
}

function playRound(humanChoice, compChoice) {
  if (humanChoice == compChoice) {
    return "Ничья";
  } else if (humanChoice == "камень" && compChoice == "бумага") {
    computerScore++;
    return `Вы проиграли, у меня ${compChoice}\nТеперь счет ${humanScore} : ${computerScore}`;
  } else if (humanChoice == "ножницы" && compChoice == "камень") {
    computerScore++;
    return `Вы проиграли, у меня ${compChoice}\nТеперь счет ${humanScore} : ${computerScore}`;
  } else if (humanChoice == "бумага" && compChoice == "ножницы") {
    computerScore++;
    return `Вы проиграли, у меня ${compChoice}\nТеперь счет ${humanScore} : ${computerScore}`;
  } else if (humanChoice == "ножницы" && compChoice == "бумага") {
    humanScore++;
    return `Вы выиграли, у меня ${compChoice}\nТеперь счет ${humanScore} : ${computerScore}`;
  } else if (humanChoice == "камень" && compChoice == "ножницы") {
    humanScore++;
    return `Вы проиграли, у меня ${compChoice}\nТеперь счет ${humanScore} : ${computerScore}`;
  } else if (humanChoice == "бумага" && compChoice == "камень") {
    humanScore++;
    return `Вы проиграли, у меня ${compChoice}\nТеперь счет ${humanScore} : ${computerScore}`;
  }
}

playGame();
