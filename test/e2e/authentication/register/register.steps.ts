let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import {binding, given, when, then} from "cucumber-tsflow";
import Callback = cucumber.CallbackStepDefinition;

import {RegisterPageObject} from './register.page';
import {LoginPageObject} from '../login';
import {AuthenticationPageObject} from '../authentication.page';

@binding()
class RegisterSteps {

  private authenticationModule: AuthenticationPageObject = new AuthenticationPageObject();
  private loginPageObject: LoginPageObject = new LoginPageObject();
  private registerPageObject: RegisterPageObject = new RegisterPageObject();

  @given(/^user clicks the register link$/)
  private givenUserClicksTheLoginLink(callback: Callback) {
    this.authenticationModule.goToLoginPage();
    this.loginPageObject.navigateToRegisterPage();
    callback();
  };

  @given(/^'(.*)' is the user name used in the register form$/)
  private givenUsername(name: string, callback: Callback): void {
    this.registerPageObject.setName(name);
    callback();
  };

  @given(/^'(.*)' is the user email used in the register form$/)
  private givenUserEmail(email: string, callback: Callback): void {
    this.registerPageObject.setEmail(email);
    callback();
  };

  @given(/^'(.*)' is the provided password used in the register form$/)
  private givenPassword(password: string, callback: Callback): void {
    this.registerPageObject.setPassword(password);
    callback();
  };

  @given(/^'(.*)' is the repeated password used in the register form/)
  private givenRepeatPassword(repeatPassword: string, callback: Callback): void {
    this.registerPageObject.setRepeatPassword(repeatPassword);
    callback();
  };

  @when(/^submitting the register form$/)
  private whenSubmitForm(callback: Callback): void {
    this.registerPageObject.submitForm();
    callback();
  };

  @then(/^the register form is validated '(.*)'$/)
  private thenFormIsValidated(valid: string, callback: Callback): void {
    let isValid = valid === 'true';
    expect(this.registerPageObject.formIsValid()).to.become(isValid).and.notify(callback);
  }

}

export = RegisterSteps;
