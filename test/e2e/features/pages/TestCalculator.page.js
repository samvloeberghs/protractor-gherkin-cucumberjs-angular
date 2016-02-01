var TestCalculatorPage = function() {

  this.valueOneInput = element(by.id('valueOne'));
  this.valueTwoInput = element(by.id('valueTwo'));
  this.calculateResultButton = element(by.id('calculateResult'));
  this.resultValueInput = element(by.id('resultValue'));

  this.get = function() {
    browser.get('http://localhost:3000/');
  };

  this.setFirstValue = function(value) {
    this.valueOneInput.clear().sendKeys(value);
  };

  this.setSecondValue = function(value) {
    this.valueTwoInput.clear().sendKeys(value);
  };

  this.getResult = function() {
    return this.resultValueInput.getAttribute('value');
  };

  this.calculateResult = function() {
    this.calculateResultButton.click();
  }
};

module.exports = TestCalculatorPage;


