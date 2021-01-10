/**
 * Goal is to make 3 possible paths for unit testing
 * Tie, User (wins), Computer (wins)
 * 3 Tests min for 100% Coverage
 * 
 * @param userChoice - 'rock', 'paper', 'scissors'
 * @param computerChoice - 'rock', 'paper', 'scissors'
 * @returns {winner} - 'tie', 'user', 'computer'
 */
module.exports = function (userChoice, computerChoice) {
  if(userChoice === computerChoice) {
    // they are the same so return tie
    return "tie";
  } else if(userChoice === "scissors" && computerChoice === "paper" || 
              userChoice === "rock" && computerChoice === "scissors" ||
              userChoice === "paper" && computerChoice === "rock") {
    // user has the winning combo
    return "user";
  } else {
    //all other combos means the computer has won
    return "computer";
  }
};
