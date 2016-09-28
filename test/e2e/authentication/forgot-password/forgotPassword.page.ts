import { element, by, protractor } from 'protractor/globals';
import { ElementArrayFinder } from 'protractor';
import Promise = webdriver.promise.Promise;

export class ForgotPasswordPageObject {

  private _form;
  private _emailInput;
  private _submitButton;
  private _goToLoginLink;
  private _goToRegisterLink;

  constructor() {

    // get the relevant elements
    this._form = element(by.id('forgot-password-form'));
    this._emailInput = this._form.element(by.id('forgot-password-email'));
    this._submitButton = this._form.element(by.id('forgot-password-submit'));

    this._goToLoginLink = element(by.id('forgot-password-login-link'));
    this._goToRegisterLink = element(by.id('forgot-password-register-link'));

  }

  setEmail(value: string): Promise<void> {
    return this._emailInput.clear().sendKeys(value);
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
