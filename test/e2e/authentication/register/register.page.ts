import ElementArrayFinder = protractor.ElementArrayFinder;
import Promise = webdriver.promise.Promise;

export class RegisterPageObject {

  private _form;
  private _nameInput;
  private _emailInput;
  private _passwordInput;
  private _repeatPasswordInput;
  private _submitButton;
  private _goToForgotPasswordLink;
  private _goToLoginLink;

  constructor() {

    // get the relevant elements
    this._form = element(by.id('register-form'));
    this._nameInput = this._form.element(by.id('register-name'));
    this._emailInput = this._form.element(by.id('register-email'));
    this._passwordInput = this._form.element(by.id('register-password'));
    this._repeatPasswordInput = this._form.element(by.id('register-repeat-password'));
    this._submitButton = this._form.element(by.id('register-submit'));

    this._goToForgotPasswordLink = element(by.id('register-forgot-password-link'));
    this._goToLoginLink = element(by.id('register-login-link'));

  }

  setName(value: string): Promise<void> {
    return this._nameInput.clear().sendKeys(value);
  }

  setEmail(value: string): Promise<void> {
    return this._emailInput.clear().sendKeys(value);
  }

  setPassword(value: string): Promise<void> {
    return this._passwordInput.clear().sendKeys(value);
  }

  setRepeatPassword(value: string): Promise<void> {
    return this._repeatPasswordInput.clear().sendKeys(value);
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
