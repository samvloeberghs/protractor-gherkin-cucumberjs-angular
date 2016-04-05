let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


import {ForgotPasswordPageObject} from './forgotPassword.page';


module.exports = function () {

  var testCalculatorPage = new ForgotPasswordPageObject();

  this.Given('$first is the first and $second is the second value', function (first, second, callback) {

    callback();
  });

  this.When('calculating result', function (callback) {
    
    callback();
  });

  this.Then('the result is $result', function (result, callback) {
    expect(testCalculatorPage.getResult()).to.eventually.equal(result).and.notify(callback);
  });
};
