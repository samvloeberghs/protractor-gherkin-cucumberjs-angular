let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, when, then } from "cucumber-tsflow";
import { CallbackStepDefinition } from "cucumber";

import { ForgotPasswordPageObject } from './forgotPassword.page';
import { LoginPageObject } from '../login';
import { AuthenticationPageObject } from '../authentication.page';

@binding()
class ForgotPasswordSteps {

  private authenticationModule: AuthenticationPageObject = new AuthenticationPageObject();
  private loginPageObject: LoginPageObject = new LoginPageObject();
  private forgotPasswordPageObject: ForgotPasswordPageObject = new ForgotPasswordPageObject();

  @given(/^user clicks the forgot password link$/)
  private givenUserClicksTheForgotPasswordLink(callback: CallbackStepDefinition): void {
    this.authenticationModule.goToLoginPage();
    this.loginPageObject.navigateToForgotPasswordPage();
    callback();
  };

  @given(/^'(.*)' is the user email used in the forgot password form$/)
  private givenUserEmail(email: string, callback: CallbackStepDefinition): void {
    this.forgotPasswordPageObject.setEmail(email);
    callback();
  };

  @when(/^submitting the forgot password form$/)
  private whenSubmitForm(callback: CallbackStepDefinition): void {
    this.forgotPasswordPageObject.submitForm();
    callback();
  };

  @then(/^the forgot password form is validated '(.*)'$/)
  private thenFormIsValidated(valid: string, callback: CallbackStepDefinition): void {
    let isValid = valid === 'true';
    expect(this.forgotPasswordPageObject.formIsValid()).to.become(isValid).and.notify(callback);
  };
}

export = ForgotPasswordSteps;
