import { browser, element, by, protractor } from 'protractor/globals';
import { ElementArrayFinder } from "protractor";
import Promise = webdriver.promise.Promise;

export class SetNewPasswordPageObject {

  private form;
  private passwordInput;
  private repeatPasswordInput;
  private submitButton;
  private goToRegisterLink;
  private goToLoginLink;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('set-new-password-form'));
    this.passwordInput = this.form.element(by.id('set-new-password-password'));
    this.repeatPasswordInput = this.form.element(by.id('set-new-password-repeat-password'));
    this.submitButton = this.form.element(by.id('set-new-password-submit'));

    this.goToRegisterLink = element(by.id('set-new-password-register-link'));
    this.goToLoginLink = element(by.id('set-new-password-login-link'));

  }

  getPage(id?: string, nonce?: string): Promise<void> {
    return browser.get(`set-new-password?id=${id}&nonce=${nonce}`);
  }

  setPassword(value: string): Promise<void> {
    return this.passwordInput.clear().sendKeys(value);
  }

  setRepeatPassword(value: string): Promise<void> {
    return this.repeatPasswordInput.clear().sendKeys(value);
  }

  submitForm(): Promise<void> {
    return this.submitButton.sendKeys(protractor.Key.ENTER);
  }

  hasAlertMessages(): Promise<boolean> {
    return this.getAllAlerts().count().then(value => {
      return value > 0;
    });
  }

  hasFormElements(): Promise<boolean> {
    return this.getAllFormElements().count().then(value => {
      return value > 0;
    });
  }

  formIsValid(): Promise<boolean> {
    return this.getAllErrorMessages().count().then(value => {
      return value === 0;
    });
  }

  private getAllErrorMessages(): ElementArrayFinder {
    return element.all(by.css('.error-group'));
  }

  private getAllAlerts(): ElementArrayFinder {
    return element.all(by.css('.alert'));
  }

  private getAllFormElements(): ElementArrayFinder {
    return element.all(by.css('.form-group'));
  }

}
