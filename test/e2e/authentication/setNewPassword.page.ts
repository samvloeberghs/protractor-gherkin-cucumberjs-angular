export class SetNewPasswordPageObject {

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

  getPage(id: number, nonce: string) {
    return browser.get(`http://localhost:3000/set-new-password?id=${id}&nonce=${nonce}`);
  }

  setPassword(value: string) {
    return this.passwordInput.clear().sendKeys(value);
  }

  setRepeatPassword(value: string) {
    return this.repeatPasswordInput.clear().sendKeys(value);
  }

  submitForm() {
    return this.form.sendKeys(protractor.Key.ENTER);
  }

}
