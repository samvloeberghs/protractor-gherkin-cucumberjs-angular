export class RegisterPageObject {

  form;
  nameInput;
  emailInput;
  passwordInput;
  repeatPasswordInput;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('register-form'));
    this.nameInput = this.form.element(by.id('register-name'));
    this.emailInput = this.form.element(by.id('register-email'));
    this.passwordInput = this.form.element(by.id('register-password'));
    this.repeatPasswordInput = this.form.element(by.id('register-repeat-password'));

  }

  getPage() {
    return browser.get('http://localhost:3000/register');
  }

  setName(value: string) {
    return this.nameInput.clear().sendKeys(value);
  }

  setEmail(value: string) {
    return this.emailInput.clear().sendKeys(value);
  }

  setPassword(value: string) {
    return this.passwordInput.clear().sendKeys(value);
  }

  setRepeatPassword(value: string) {
    return this.repeatPasswordInput.clear().sendKeys(value);
  }

  submitForm(){
    return this.form.sendKeys(protractor.Key.ENTER);
  }

}
