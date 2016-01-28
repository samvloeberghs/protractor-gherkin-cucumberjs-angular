var TestCalculatorPage = function() {

  this.get = function() {
    browser.get('http://localhost:3000/');
  };

  this.setFirstValue = function(value) {
    element(by.id('valueOne')).clear().sendKeys(value);
  };

  this.setSecondValue = function(value) {
    element(by.id('valueTwo')).clear().sendKeys(value);
  };

  this.getResult = function() {
    return element(by.id('resultValue')).getAttribute('value');
  };

  this.calculateResult = function() {
    element(by.id('calculateResult')).click();
  }
};

module.exports = TestCalculatorPage;
