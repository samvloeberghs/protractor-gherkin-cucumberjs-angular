import { browser, element, by, protractor, ElementArrayFinder } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';

export class SetNewPasswordPageObject {

  private form;
  private title;
  private passwordInput;
  private repeatPasswordInput;
  private submitButton;
  private goToRegisterLink;
  private goToLoginLink;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('set-new-password-form'));
    this.title = element(by.id('set-new-password-title'));
    this.passwordInput = this.form.element(by.id('set-new-password-password'));
    this.repeatPasswordInput = this.form.element(by.id('set-new-password-repeat-password'));
    this.submitButton = this.form.element(by.id('set-new-password-submit'));

    this.goToRegisterLink = element(by.id('set-new-password-register-link'));
    this.goToLoginLink = element(by.id('set-new-password-login-link'));

  }

  setPassword(value: string): wdpromise.Promise<void> {
    return this.passwordInput.clear().sendKeys(value);
  }

  setRepeatPassword(value: string): wdpromise.Promise<void> {
    return this.repeatPasswordInput.clear().sendKeys(value);
  }

  getTitle(): wdpromise.Promise<string> {
    return this.title.getText();
  }

  submitForm(): wdpromise.Promise<void> {
    return this.submitButton.sendKeys(protractor.Key.ENTER);
  }

  hasAlertMessages(): wdpromise.Promise<boolean> {
    return this.getAllAlerts().count().then(value => {
      return value > 0;
    });
  }

  hasFormElements(): wdpromise.Promise<boolean> {
    return this.getAllFormElements().count().then(value => {
      return value > 0;
    });
  }

  formIsValid(): wdpromise.Promise<boolean> {
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
