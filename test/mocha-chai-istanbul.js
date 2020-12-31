var getRockPaperScissorsWinner = require('../public/rps-module.js');
var expect = require('chai').expect;

describe("getRockPaperScissorsWinner", () => {
  console.log('In describe function');
  // Work around undefined function check.
  describe("ties", () => {
    it("rock ties with rock", () => {
      expect(getRockPaperScissorsWinner("rock", "rock")).to.equal("tie");
    });
    it("paper ties with paper", () => {
      expect(getRockPaperScissorsWinner("paper", "paper")).to.equal("tie");
    });
    it("scissors ties with scissors", () => {
      expect(getRockPaperScissorsWinner("scissors", "scissors")).to.equal(
        "tie"
      );
    });
  });
  describe("user wins", () => {
    describe("bomb beats everything", () => {
      it("bomb beats rock", () => {
        expect(getRockPaperScissorsWinner("bomb", "rock")).to.equal("user");
      });
      it("bomb beats paper", () => {
        expect(getRockPaperScissorsWinner("bomb", "paper")).to.equal("user");
      });
      it("bomb beats scissors", () => {
        expect(getRockPaperScissorsWinner("bomb", "scissors")).to.equal("user");
      });
    });
    it("rock beats scissors", () => {
      expect(getRockPaperScissorsWinner("rock", "scissors")).to.equal("user");
    });
    it("paper beats rock", () => {
      expect(getRockPaperScissorsWinner("paper", "rock")).to.equal("user");
    });
    it("scissors beats paper", () => {
      expect(getRockPaperScissorsWinner("scissors", "paper")).to.equal("user");
    });
  });
  describe("computer wins", () => {
    it("rock beats scissors", () => {
      expect(getRockPaperScissorsWinner("scissors", "rock")).to.equal(
        "computer"
      );
    });
    it("paper beats rock", () => {
      expect(getRockPaperScissorsWinner("rock", "paper")).to.equal("computer");
    });
    it("scissors beats paper", () => {
      expect(getRockPaperScissorsWinner("paper", "scissors")).to.equal(
        "computer"
      );
    });
  });
});
