export class Scissors {
  get name() {
    return "scissors";
  }

  beat(computerChoice) {
    let results;

    if (computerChoice === "paper") {
      results = "Your scissors wins!";
    } else {
      results = "You lose, rock wins ::sad face::";
    }

    return results;
  }
}
