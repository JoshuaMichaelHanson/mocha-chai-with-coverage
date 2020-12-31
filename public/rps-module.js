// One possible way to solve rock-paper-scissors.

const choices = {
    rock: 0,
    paper: 1,
    scissors: 2
  };
  const outcomes = ["tie", "user", "computer"];
  const numChoices = outcomes.length;
  
  module.exports = function (userChoice, computerChoice) {
    console.log("getRockPaperScissorsWinner");
    if (userChoice === "bomb") {
      console.log('bomb');
      return outcomes[1];
    }
    console.log('Not bomb');
    return outcomes[
      (choices[userChoice] - choices[computerChoice] + numChoices) % numChoices
    ];
  };
  
  