import { paperBeatsRock } from './rules/PaperBeatsRock.js';

export class Paper {
  get name() {
    return "paper";
  }

  beats(computerChoice) {
    let results;

    if (computerChoice === "paper") {
      results = "The result is a tie!";
    } else if (paperBeatsRock(this.name, computerChoice)) {
      results = "Your paper wins!";
    } else {
      results = "You lose, scissors wins ::sad face::";
    }

    return results;
  }
}
