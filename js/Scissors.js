import { scissorsBeatsPaper } from "./rules/ScissorsBeatsPaper.js";

export class Scissors {
  get name() {
    return "scissors";
  }

  beats(computerChoice) {
    let results;

    if (computerChoice === "scissors") {
      results = "THIS SHOULD NEVER HAPPEN";
    } else if (scissorsBeatsPaper(this.name, computerChoice)) {
      results = "THIS SHOULD NEVER HAPPEN";
    } else {
      results = "THIS SHOULD NEVER HAPPEN";
    }

    return results;
  }
}
