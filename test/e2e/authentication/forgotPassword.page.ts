class ForgotPasswordPageObject {

  form;
  emailInput;

  constructor() {

    // get the container wrapper
    var container = element(by.id("forgot-password-container"));

    // get the relevant elements
    this.form = container.element(by.id('forgot-password-form'));
    this.emailInput = container.element(by.id('forgot-password-email'));


  }

  setEmail(value: string) {
    return this.emailInput.clear().sendKeys(value);
  }

  submitForm(){
    return this.form.sendKeys(protractor.Key.ENTER);
  }

}

module.exports = ForgotPasswordPageObject;
