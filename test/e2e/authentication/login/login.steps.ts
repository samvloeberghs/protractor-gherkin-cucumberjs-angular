let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import {LoginPageObject} from './login.page';

module.exports = function () {

  let loginPageObject = new LoginPageObject();

  this.Given(/^user clicks the login link$/, (callback) => {
    loginPageObject.getPage();
    callback();

  });
  this.Given(/^'(.*)' is the user email in the login form$/, (email, callback) => {
    loginPageObject.setEmail(email);
    callback();
  });
  this.Given(/^'(.*)' is the user password in the login form$/, (password, callback) => {
    loginPageObject.setPassword(password);
    callback();
  });

  this.When(/^submitting the login form$/, (callback) => {
    loginPageObject.submitForm();
    callback();
  });

  this.Then(/^the login form is validated '(.*)'$/, (valid, callback) => {
    valid = valid === 'true';
    expect(loginPageObject.formIsValid()).to.become(valid).and.notify(callback);
  });

};
