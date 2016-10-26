let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

import { LoginPageObject } from './login.page';
import { AuthenticationPageObject } from '../authentication.page';

@binding()
class LoginSteps {

  private authenticationModule = new AuthenticationPageObject();
  private loginPageObject = new LoginPageObject();

  @given(/^user clicks the login link$/)
  private givenUserClicksTheLoginLink(callback: CallbackStepDefinition) {
    this.authenticationModule.goToLoginPage();
    callback();
  };

  @given(/^'(.*)' is the user email in the login form$/)
  private givenUserEmail(email: string, callback: CallbackStepDefinition) {
    this.loginPageObject.setEmail(email);
    callback();
  };

  @given(/^'(.*)' is the user password in the login form$/)
  private givenPassword(password: string, callback: CallbackStepDefinition) {
    this.loginPageObject.setPassword(password);
    callback();
  };

  @when(/^submitting the login form$/)
  private whenSubmitForm(callback: CallbackStepDefinition) {
    this.loginPageObject.submitForm();
    callback();
  };

  @then(/^the login form is validated '(.*)'$/)
  private thenFormIsValidated(valid: string, callback: CallbackStepDefinition) {
    let isValid = valid === 'true';
    expect(this.loginPageObject.formIsValid()).to.become(isValid).and.notify(callback);
  };
}

export = LoginSteps;
