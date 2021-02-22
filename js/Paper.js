import { paperBeatsRock } from './rules/PaperBeatsRock.js';

export class Paper {
  get name() {
    return "paper";
  }

  beats(computerChoice) {
    let results;

    if (computerChoice === "paper") {
      results = "THIS SHOULD NEVER HAPPEN";
    } else if (paperBeatsRock(this.name, computerChoice)) {
      results = "THIS SHOULD NEVER HAPPEN";
    } else {
      results = "THIS SHOULD NEVER HAPPEN";
    }

    return results;
  }
}
