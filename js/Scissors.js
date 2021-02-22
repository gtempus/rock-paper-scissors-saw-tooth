import { scissorsBeatsPaper } from "./rules/ScissorsBeatsPaper.js";

export class Scissors {
  get name() {
    return "scissors";
  }

  beats(computerChoice) {
    let results;

    if (computerChoice === "scissors") {
      results = "The result is a tie!";
    } else if (scissorsBeatsPaper(this.name, computerChoice)) {
      results = "Your scissors wins!";
    } else {
      results = "You lose, rock wins ::sad face::";
    }

    return results;
  }
}
