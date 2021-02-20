/* This pen was heavily influenced by codecademy's 'Rock, Paper, Scissors' project (https://bit.ly/1gEyvZE). The goal is to complete the codecademy project and modify the code you create to use the provided interface. */
import { Rock } from './Rock.js';
import { Paper } from './Paper.js';
import { Scissors } from './Scissors.js';

function computersTurn() {
  // Gives a random number between 0 and 1 which we will use to figure out the computer's choice
  const random = Math.random();

  // Figure out the computer's choice from the random number we generated
  if (random < 0.34) {
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

export function compare(yourChoice) {
  // Declare the variables
  const computerChoice = computersTurn();
  let results;

  // Use the player's choice and computer's choice to find the winner
  if (yourChoice === computerChoice) {
    results = "The result is a tie!";
  } else if (yourChoice === new Rock().name) {
    results = new Rock().beats(computerChoice)
  } else if (yourChoice === new Paper().name) {
    results = new Paper().beat(computerChoice);
  } else if (yourChoice === new Scissors().name) {
    results = new Scissors().beat(computerChoice);
  }

  // Show the results in a pop-up
  alert(results);
}
