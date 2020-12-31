# CS 633 Unit Test Example 2

**This example builds on Example 1**

Using the JavaScript test framework [Mocha](https://mochajs.org/) and BDD/TDD assertion library [Chai](https://www.chaijs.com/) we will execute tests for the classic game rock-paper-scissors. Unlike Example 1 these tests do **NOT** run directly in the browser.  We will be executing a [npm command](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/) in the glitch command line.  We are also adding an additional library to the **mix** called [Istanbul](https://istanbul.js.org/docs/tutorials/mocha/) that allows us to understand how much code coverage the tests are providing.  

## To execute the tests please follow these simple steps ##

    - Ensure you have remixed Example 2 on the Glitch platform
    - Edit the project
    - On the bottom left of the screen there is a drop-up called Tools
    - Click the tools button -> Click 'Terminal' button
    - This opens the 'bash' shell command terminal
    - type the command 'npm test'
    - Congratulations!  You should see all tests pass with 100% coverage

## What did we just do? ##

Please open the  [package.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) file located in the glitch project to see the command we just executed