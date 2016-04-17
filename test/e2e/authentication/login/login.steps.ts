let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import {LoginPageObject} from './login.page';
import {AuthenticationPageObject} from '../authentication.page';

module.exports = function () {

  let authenticationModule = new AuthenticationPageObject();
  let loginPageObject = new LoginPageObject();

  this.setDefaultTimeout(60 * 1000);

  this.Given(/^user clicks the login link$/, (callback) => {
    authenticationModule.goToLogin();
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
