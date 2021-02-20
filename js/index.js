/* This pen was heavily influenced by codecademy's 'Rock, Paper, Scissors' project (https://bit.ly/1gEyvZE). The goal is to complete the codecademy project and modify the code you create to use the provided interface. */

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

class Rock {
  get name() {
    return "rock";
  }

  beats(computerChoice) {
    let results;

    if (computerChoice === "scissors") {
      results = "Your rock wins!";
    } else {
      results = "You lose, paper wins ::sad face::";
    }

    return results;
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
  } else if (yourChoice === "paper") {
    if (computerChoice === "rock") {
      results = "Your paper wins!";
    } else {
      results = "You lose, scissors wins ::sad face::";
    }
  } else if (yourChoice === "scissors") {
    if (computerChoice === "paper") {
      results = "Your scissors wins!";
    } else {
      results = "You lose, rock wins ::sad face::";
    }
  }

  // Show the results in a pop-up
  alert(results);
}
