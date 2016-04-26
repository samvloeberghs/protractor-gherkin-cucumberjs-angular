import ElementArrayFinder = protractor.ElementArrayFinder;
import Promise = webdriver.promise.Promise;

export class RegisterPageObject {

  private form;
  private nameInput;
  private emailInput;
  private passwordInput;
  private repeatPasswordInput;
  private submitButton;
  private goToForgotPasswordLink;
  private goToLoginLink;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('register-form'));
    this.nameInput = this.form.element(by.id('register-name'));
    this.emailInput = this.form.element(by.id('register-email'));
    this.passwordInput = this.form.element(by.id('register-password'));
    this.repeatPasswordInput = this.form.element(by.id('register-repeat-password'));
    this.submitButton = this.form.element(by.id('register-submit'));

    this.goToForgotPasswordLink = element(by.id('register-forgot-password-link'));
    this.goToLoginLink = element(by.id('register-login-link'));

  }

  private getAllErrorMessages(): ElementArrayFinder {
    return element.all(by.css('.error-group'));
  }

  public setName(value: string): Promise<void> {
    return this.nameInput.clear().sendKeys(value);
  }

  public setEmail(value: string): Promise<void> {
    return this.emailInput.clear().sendKeys(value);
  }

  public setPassword(value: string): Promise<void> {
    return this.passwordInput.clear().sendKeys(value);
  }

  public setRepeatPassword(value: string): Promise<void> {
    return this.repeatPasswordInput.clear().sendKeys(value);
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
