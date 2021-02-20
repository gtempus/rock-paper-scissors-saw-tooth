export class Rock {
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


