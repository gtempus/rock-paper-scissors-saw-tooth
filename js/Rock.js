import { rockBeatsScissors } from "./rules/RockBeatsScissors.js";
export class Rock {
  get name() {
    return "rock";
  }

  beats(computerChoice) {
    let results;

    if (computerChoice === "rock") {
      results = "THIS SHOULD NEVER HAPPEN";
    } else if (rockBeatsScissors(this.name, computerChoice)) {
      results = "THIS SHOULD NEVER HAPPEN";
    } else {
      results = "THIS SHOULD NEVER HAPPEN";
    }

    return results;
  }
}


