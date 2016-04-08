let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import {RegisterPageObject} from './register.page';
import {LoginPageObject} from '../login';

module.exports = function () {

  let loginPageObject = new LoginPageObject();
  let registerPageObject = new RegisterPageObject();

  this.Given(/^user clicks the register link$/, (callback) => {
    loginPageObject.getPage();
    loginPageObject.navigateToRegisterPage();
    callback();
  });
  this.Given(/^'(.*)' is the user email used in the register form$/, function (email, callback) {
    registerPageObject.setEmail(email);
    callback();
  });
  this.Given(/^'(.*)' is the user name used in the register form$/, function (name, callback) {
    registerPageObject.setName(name);
    callback();
  });
  this.Given(/^'(.*)' is the provided password used in the register form$/, function (password, callback) {
    registerPageObject.setPassword(password);
    callback();
  });
  this.Given(/^'(.*)' is the repeated password used in the register form/, function (repeatPassword, callback) {
    registerPageObject.setRepeatPassword(repeatPassword);
    callback();
  });

  this.When(/^submitting the register form$/, (callback) => {
    registerPageObject.submitForm();
    callback();
  });

  this.Then(/^the register form is validated '(.*)'$/, function (valid, callback) {
    valid = valid === 'true';
    expect(registerPageObject.hasErrorMessages()).to.become(valid).and.notify(callback);
  });


};
