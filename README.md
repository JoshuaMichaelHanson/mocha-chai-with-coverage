# CS 633 Unit Test Example 2

**This example builds on Example 1**

Using the JavaScript test framework [Mocha](https://mochajs.org/) and BDD/TDD assertion library [Chai](https://www.chaijs.com/) we will execute tests for the classic game rock-paper-scissors. Unlike Example 1 these tests do **NOT** run directly in the browser. We execute the tests using npm and measure coverage using [Istanbul / nyc](https://istanbul.js.org/docs/tutorials/mocha/).

Repository:
https://github.com/JoshuaMichaelHanson/mocha-chai-with-coverage.git

## Getting Started

### Recommended (Preferred) way — GitHub Codespaces

- Fork this repository to your own GitHub account using the "Fork" button at the top right of the repository page.
- After forking, open your forked repository on GitHub.
- Create a Codespace from your forked repository by clicking "Code" -> "Open with Codespaces" -> "Create codespace on main".
- When the Codespace is created, it will automatically install dependencies (`npm install` is run by the Codespaces setup).

### Local Development

- Fork this repository to your own GitHub account.
- Clone your fork locally:
  ```bash
  git clone https://github.com/YOUR-ACCOUNT/mocha-chai-with-coverage.git
  cd mocha-chai-with-coverage
  ```
- Install dependencies locally:
  ```bash
  npm install
  ```

## Running Tests

- Once dependencies are installed (either in Codespaces or locally), open a terminal and run the tests with:

  ```bash
    npm test
  ```