import ElementArrayFinder = protractor.ElementArrayFinder;
import Promise = webdriver.promise.Promise;

export class ForgotPasswordPageObject {

  private form;
  private emailInput;
  private submitButton;
  private goToLoginLink;
  private goToRegisterLink;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('forgot-password-form'));
    this.emailInput = this.form.element(by.id('forgot-password-email'));
    this.submitButton = this.form.element(by.id('forgot-password-submit'));

    this.goToLoginLink = element(by.id('forgot-password-login-link'));
    this.goToRegisterLink = element(by.id('forgot-password-register-link'));

  }

  private getAllErrorMessages(): ElementArrayFinder {
    return element.all(by.css('.error-group'));
  }

  public setEmail(value: string): Promise<void> {
    return this.emailInput.clear().sendKeys(value);
  }

  public submitForm(): Promise<void> {
    return this.submitButton.sendKeys(protractor.Key.ENTER);
  }

  public formIsValid(): Promise<boolean> {
    return this.getAllErrorMessages().count().then(value => {
      return value === 0;
    });
  }

}
