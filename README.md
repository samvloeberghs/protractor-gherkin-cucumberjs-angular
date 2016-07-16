# CucumberJS with Gherkin scenarios in Protractor & Angular2 

An example project to setup CucumberJS with Gherkin scenarios in Protractor & Angular2 As a base for the project I've used the amazing starting pack: https://github.com/AngularClass/angular2-webpack-starter 

## Get started 

```bash 
# clone the repo 
git clone https://github.com/samvloeberghs/protractor-gherkin-cucumberjs-angular2.git
 
# change directory to our repo 
cd protractor-gherkin-cucumberjs-angular2
 
# install the repo with npm 
npm install
 
# start the server 
npm start 

# run the tests ( this will both run the E2E & unit tests ) 
npm run e2e
```

## CucumberJS

Cucumber.js is a Cucumber implementation written in pure JavaScript. It runs on Node.js, IO.js, browsers and any other JavaScript platform.

More info: 
- https://cucumber.io/docs/reference/javascript
- https://github.com/cucumber/cucumber-js

## Gherkin scenarios

Gherkin is the language that Cucumber understands. It is a Business Readable, Domain Specific Language that lets you describe software’s behaviour without detailing how that behaviour is implemented.

Gherkin serves two purposes — documentation and automated tests. The third is a bonus feature — when it yells in red it’s talking to you, telling you what code you should write.

More info:
- https://github.com/cucumber/cucumber/wiki/Gherkin

<!---
## Automated integration or end-to-end tests using Protractor, CucumberJs & Gherkin scenarios

Writing unit tests covers testing the single source of truth of your models, services and whatever you code. Testing the whole picture of your webapplication requires that you test your application in a way that your vistors will use it. Manual testing these behaviours requires a lot of time and is prone to human errors. On the other hand it can also open up for unexplored use cases and broaden the view of your business case.

Using Gherkin scenarios with Cucumber it's possible to describe the behaviour and every use case possible if you target specific features of your application or perhaps entire pages. Don't use end to end tests to test what you've already tested with your unit tests. End to end tests are intended to test the entire flow of your application or big parts of it.

Cucumber is a ..
Gherkin is the language that Cucumber understands. It's an implementation agnostic, business readable DSL that lets you describe software’s behaviour. For example, the following Gherkin scenario or feature describes the behaviour of a simple calculator:

```bash 
Feature: Test Calculator Component

  Scenario Outline: Should calculate the result and set it

    Given <first> is the first, <second> is the second value, <operation> is the operation
    When calculating result
    Then the result is <result>

  Examples:
  | first | second | operation | result |
  |  6    |  2     |     +     |   8    |
  |  6    |  2     |     -     |   4    |
  |  6    |  2     |     /     |   3    |
  |  6    |  2     |     *     |   12   |
```bash 


This example will demonstrate the implementation of that calculator Gherkin scenario using an Angular 2 application to create the calculator, Protractor with Selenium webdriver as the test runner and CucumberJs as the framework.

### Setting up the application

The calculator is very simple. It takes 2 values in an input field, a choice of operator and returns the result. We provide every related field with a clear id so that we can reference it easily later on

```html
<div>

  <input type="text" [(ngModel)]="valueOne" id="valueOne"/>
  <select [(ngModel)]="operation" id="operation">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>
  <input type="text" [(ngModel)]="valueTwo" id="valueTwo"/>
  <button (click)="calculateResult()" id="calculateResult">=</button>
  <input type="text" [(ngModel)]="resultValue" readonly id="resultValue"/>

</div>
``` 

The business logic for this calculator is also very simple:

```ts
  switch (this.operation) {
      case '-':
        this.resultValue = parseInt(this.valueOne, 10) - parseInt(this.valueTwo, 10);
        break;
      case '/':
        this.resultValue = parseInt(this.valueOne, 10) / parseInt(this.valueTwo, 10);
        break;
      case '*':
        this.resultValue = parseInt(this.valueOne, 10) * parseInt(this.valueTwo, 10);
        break;
      case '+':
      default:
        this.resultValue = parseInt(this.valueOne, 10) + parseInt(this.valueTwo, 10);
        break;
    }
  }
```

Note that we could easily test this component using a simple unit test. We are testing the whole flow of the app:
1. Calculate the result using the given user input
2. Route to a page that shows the result

-->