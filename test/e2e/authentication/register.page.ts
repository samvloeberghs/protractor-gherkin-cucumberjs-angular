class RegisterPageObject {

  form;
  nameInput;
  emailInput;
  passwordInput;
  repeatPasswordInput;

  constructor() {

    // get the container wrapper
    var container = element(by.id("register-container"));

    // get the relevant elements
    this.form = container.element(by.id('register-form'));
    this.nameInput = container.element(by.id('register-name'));
    this.emailInput = container.element(by.id('register-email'));
    this.passwordInput = container.element(by.id('register-password'));
    this.repeatPasswordInput = container.element(by.id('register-repeat-password'));

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

module.exports = RegisterPageObject;
