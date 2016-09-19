import ElementArrayFinder = protractor.ElementArrayFinder;
import Promise = webdriver.promise.Promise;

export class SetNewPasswordPageObject {

  private _form;
  private _passwordInput;
  private _repeatPasswordInput;
  private _submitButton;
  private _goToRegisterLink;
  private _goToLoginLink;

  constructor() {

    // get the relevant elements
    this._form = element(by.id('set-new-password-form'));
    this._passwordInput = this._form.element(by.id('set-new-password-password'));
    this._repeatPasswordInput = this._form.element(by.id('set-new-password-repeat-password'));
    this._submitButton = this._form.element(by.id('set-new-password-submit'));

    this._goToRegisterLink = element(by.id('set-new-password-register-link'));
    this._goToLoginLink = element(by.id('set-new-password-login-link'));

  }

  getPage(id?: string, nonce?: string): Promise<void> {
    return browser.get(`set-new-password?id=${id}&nonce=${nonce}`);
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

  hasAlertMessages(): Promise<boolean> {
    return this._getAllAlerts().count().then(value => {
      return value > 0;
    });
  }

  hasFormElements(): Promise<boolean> {
    return this._getAllFormElements().count().then(value => {
      return value > 0;
    });
  }

  formIsValid(): Promise<boolean> {
    return this._getAllErrorMessages().count().then(value => {
      return value === 0;
    });
  }

  private _getAllErrorMessages(): ElementArrayFinder {
    return element.all(by.css('.error-group'));
  }

  private _getAllAlerts(): ElementArrayFinder {
    return element.all(by.css('.alert'));
  }

  private _getAllFormElements(): ElementArrayFinder {
    return element.all(by.css('.form-group'));
  }

}
