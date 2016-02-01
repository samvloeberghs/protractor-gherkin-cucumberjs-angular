var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var TestCalculatorPage = require('../pages/TestCalculator.page');

module.exports = function () {

  var testCalculatorPage = new TestCalculatorPage();

  this.Given('$first is the first and $second is the second value', function (first, second, callback) {
    testCalculatorPage.get();
    testCalculatorPage.setFirstValue(first);
    testCalculatorPage.setSecondValue(second);
    callback();
  });

  this.When('calculating result', function (callback) {
    testCalculatorPage.calculateResult();
    callback();
  });

  this.Then('the result is $result', function (result, callback) {
    expect(testCalculatorPage.getResult()).to.eventually.equal(result).and.notify(callback);
  });

};
