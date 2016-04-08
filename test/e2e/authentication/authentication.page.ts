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
    return browser.get(`http://localhost:3000/${this.pages['login']}`);
  }

  goToRegisterPage(){
    return browser.get(`http://localhost:3000/${this.pages['register']}`);
  }

  goToForgotPasswordPage(){
    return browser.get(`http://localhost:3000/${this.pages['forgotPassword']}`);
  }

  goToSetNewPasswordPage(){
    return browser.get(`http://localhost:3000/${this.pages['setNewPassword']}`);
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

}
