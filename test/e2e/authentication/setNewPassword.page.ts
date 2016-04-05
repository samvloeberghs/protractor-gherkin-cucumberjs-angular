class SetNewPasswordPageObject {

  form;
  passwordInput;
  repeatPasswordInput;

  constructor() {

    // get the container wrapper
    var container = element(by.id("set-new-password-container"));

    // get the relevant elements
    this.form = container.element(by.id('set-new-password-form'));
    this.passwordInput = container.element(by.id('set-new-password-password'));
    this.repeatPasswordInput = container.element(by.id('set-new-password-repeat-password'));

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

module.exports = SetNewPasswordPageObject;
