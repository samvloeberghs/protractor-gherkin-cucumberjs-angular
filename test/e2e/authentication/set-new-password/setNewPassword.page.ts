export class SetNewPasswordPageObject {

  private form;
  private passwordInput;
  private repeatPasswordInput;
  private submitButton;
  private goToRegisterLink;
  private goToLoginLink;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('set-new-password-form'));
    this.passwordInput = this.form.element(by.id('set-new-password-password'));
    this.repeatPasswordInput = this.form.element(by.id('set-new-password-repeat-password'));
    this.submitButton = this.form.element(by.id('set-new-password-submit'));

    this.goToRegisterLink = element(by.id('set-new-password-register-link'));
    this.goToLoginLink = element(by.id('set-new-password-login-link'));

  }

  getPage(id?: string, nonce?:string) {
    return browser.get(`http://localhost:3000/set-new-password?id=${id}&nonce=${nonce}`);
  }

  setPassword(value: string) {
    return this.passwordInput.clear().sendKeys(value);
  }

  setRepeatPassword(value: string) {
    return this.repeatPasswordInput.clear().sendKeys(value);
  }

  submitForm() {
    return this.submitButton.sendKeys(protractor.Key.ENTER);
  }

  getAllErrorMessages() {
    return element.all(by.css('.error-group'));
  }

  getAllAlerts() {
    return element.all(by.css('.alert'));
  }

  getAllFormElements() {
    return element.all(by.css('.form-group'));
  }

  hasErrorMessages() {
    return this.getAllErrorMessages().count().then(value => {
      return value > 0;
    });
  }

  hasAlertMessages() {
    return this.getAllAlerts().count().then(value => {
      return value > 0;
    });
  }

  hasFormElements(){
    return this.getAllFormElements().count().then(value => {
      return value > 0;
    });
  }

  formIsValid(){
    return this.getAllErrorMessages().count().then(value => {
      return value === 0;
    });
  }

}
