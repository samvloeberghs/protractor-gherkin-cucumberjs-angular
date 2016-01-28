var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

module.exports = function () {

    this.Given('$first is the first and $second is the second value', function (first, second, callback) {
        this.testCalculatorPage.get();
        this.testCalculatorPage.setFirstValue(first);
        this.testCalculatorPage.setSecondValue(second);
        callback();
    });

    this.When('calculating result', function (callback) {
        this.testCalculatorPage.calculateResult();
        callback();
    });

    this.Then('the result is $result', function (result, callback) {
        expect(this.testCalculatorPage.getResult()).to.eventually.equal(result).and.notify(callback);
    });
};
