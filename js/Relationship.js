export function isPlayerAWinner(playerChoice, computerChoice) {
  const relationship = {
    paper: { beats: 'rock'},
    rock: { beats: 'scissors' },
    scissors: { beats: 'paper'}
  }

  return relationship[playerChoice].beats === computerChoice;
}