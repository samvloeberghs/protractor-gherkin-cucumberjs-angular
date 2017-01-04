import { element, by, protractor, ElementArrayFinder } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';

export class ForgotPasswordPageObject {

  private form;
  private title;
  private emailInput;
  private submitButton;
  private goToLoginLink;
  private goToRegisterLink;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('forgot-password-form'));
    this.title = element(by.id('forgot-password-title'));
    this.emailInput = this.form.element(by.id('forgot-password-email'));
    this.submitButton = this.form.element(by.id('forgot-password-submit'));

    this.goToLoginLink = element(by.id('forgot-password-login-link'));
    this.goToRegisterLink = element(by.id('forgot-password-register-link'));

  }

  setEmail(value: string): wdpromise.Promise<void> {
    return this.emailInput.clear().sendKeys(value);
  }

  getTitle(): wdpromise.Promise<string> {
    return this.title.getText();
  }

  submitForm(): wdpromise.Promise<void> {
    return this.submitButton.sendKeys(protractor.Key.ENTER);
  }

  formIsValid(): wdpromise.Promise<boolean> {
    return this.getAllErrorMessages().count().then(value => {
      return value === 0;
    });
  }

  private getAllErrorMessages(): ElementArrayFinder {
    return element.all(by.css('.error-group'));
  }

}
