export class Paper {
  get name() {
    return "paper";
  }

  beat(computerChoice) {
    let results;

    if (computerChoice === "rock") {
      results = "Your paper wins!";
    } else {
      results = "You lose, scissors wins ::sad face::";
    }

    return results;
  }
}
