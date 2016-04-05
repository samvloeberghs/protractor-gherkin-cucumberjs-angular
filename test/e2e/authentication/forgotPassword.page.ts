export class ForgotPasswordPageObject {

  form;
  emailInput;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('forgot-password-form'));
    this.emailInput = this.form.element(by.id('forgot-password-email'));

  }

  getPage() {
    return browser.get('http://localhost:3000/forgot-password');
  }

  setEmail(value: string) {
    return this.emailInput.clear().sendKeys(value);
  }

  submitForm() {
    return this.form.sendKeys(protractor.Key.ENTER);
  }

}
