import { element, by, protractor } from 'protractor/globals';
import { ElementArrayFinder } from 'protractor';
import Promise = webdriver.promise.Promise;

export class LoginPageObject {

  private _form;
  private _passwordInput;
  private _emailInput;
  private _submitButton;
  private _goToForgotPasswordLink;
  private _goToRegisterLink;

  constructor() {

    // get the container wrapper
    this._form = element(by.id('login-form'));
    this._passwordInput = this._form.element(by.id('login-password'));
    this._emailInput = this._form.element(by.id('login-email'));
    this._submitButton = this._form.element(by.id('login-submit'));

    this._goToForgotPasswordLink = element(by.id('login-forgot-password-link'));
    this._goToRegisterLink = element(by.id('login-register-link'));

  }

  navigateToForgotPasswordPage(): Promise<void> {
    return this._goToForgotPasswordLink.click();
  }

  navigateToRegisterPage(): Promise<void> {
    return this._goToRegisterLink.click();
  }

  setEmail(value: string): Promise<void> {
    return this._emailInput.clear().sendKeys(value);
  }

  setPassword(value: string): Promise<void> {
    return this._passwordInput.clear().sendKeys(value);
  }

  submitForm(): Promise<void> {
    return this._submitButton.sendKeys(protractor.Key.ENTER);
  }

  formIsValid(): Promise<boolean> {
    return this._getAllErrorMessages().count().then(value => {
      return value === 0;
    });
  }

  private _getAllErrorMessages(): ElementArrayFinder {
    return element.all(by.css('.error-group'));
  }
}
