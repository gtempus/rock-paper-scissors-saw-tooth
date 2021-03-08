/* This pen was heavily influenced by codecademy's 'Rock, Paper, Scissors' project (https://bit.ly/1gEyvZE). The goal is to complete the codecademy project and modify the code you create to use the provided interface. */
import { isPlayerAWinner } from './Relationship.js';

function computersTurn() {
  // Gives a random number between 0 and 1 which we will use to figure out the computer's choice
    const random = Math.trunc(Math.random() * 100);

  // Figure out the computer's choice from the random number we generated
  if (random < 34) {
    return "rock";
  } else if (random <= 67) {
    return "paper";
  } else {
    return "scissors";
  }
}

export function compare(yourChoice) {
  const computerChoice = computersTurn();
  if (yourChoice === computerChoice) { return alert("The result is a tie!"); }

  if (isPlayerAWinner(yourChoice, computerChoice)) {
    return alert("Your " + yourChoice + " wins!");
  }

  return alert("You lose, " + computerChoice + " wins ::sad face::");
}
