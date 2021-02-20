export class Paper {
  get name() {
    return "paper";
  }

  beat(computerChoice) {
    let results;

    if (computerChoice === "paper") {
      results = "The result is a tie!";
    } else if (computerChoice === "rock") {
      results = "Your paper wins!";
    } else {
      results = "You lose, scissors wins ::sad face::";
    }

    return results;
  }
}
