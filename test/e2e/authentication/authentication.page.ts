export class AuthenticationPageObject {

  pages: Object;

  constructor() {

    this.pages = {
      'login': 'login',
      'forgotPassword': 'forgot-password',
      'register': 'register',
      'setNewPassword': 'set-new-password'
    };

  }

  goToLogin(){
    return browser.get(`http://ng2auth.samvloeberghs.be/${this.pages['login']}`);
  }

  goToRegisterPage(){
    return browser.get(`http://ng2auth.samvloeberghs.be/${this.pages['register']}`);
  }

  goToForgotPasswordPage(){
    return browser.get(`http://ng2auth.samvloeberghs.be/${this.pages['forgotPassword']}`);
  }

  goToSetNewPasswordPage(){
    return browser.get(`http://ng2auth.samvloeberghs.be/${this.pages['setNewPassword']}`);
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

}
