export class LoginPageObject {

  private form;
  private passwordInput;
  private emailInput;
  private submitButton;
  private goToForgotPasswordLink;
  private goToRegisterLink;

  constructor() {

    // get the container wrapper
    this.form = element(by.id('login-form'));
    this.passwordInput = this.form.element(by.id('login-password'));
    this.emailInput = this.form.element(by.id('login-email'));
    this.submitButton = this.form.element(by.id('login-submit'));

    this.goToForgotPasswordLink = element(by.id('login-forgot-password-link'));
    this.goToRegisterLink = element(by.id('login-register-link'));

  }

  getPage() {
    return browser.get('http://localhost:3000/login');
    // or
    // return browser.get('http://localhost:3000');
  }

  navigateToForgotPasswordPage() {
    return this.goToForgotPasswordLink.click();
  }

  navigateToRegisterPage() {
    return this.goToRegisterLink.click();
  }

  setEmail(value: string) {
    return this.emailInput.clear().sendKeys(value);
  }

  setPassword(value: string) {
    return this.passwordInput.clear().sendKeys(value);
  }

  submitForm() {
    return this.submitButton.sendKeys(protractor.Key.ENTER);
  }

  getAllErrorMessages() {
    return element.all(by.css('.error-group'));
  }

  hasErrorMessages() {
    return this.getAllErrorMessages().count().then(value => {
      return value > 0;
    });
  }

}
