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

  openApp(){
    return browser.get('');
  }
  goToLogin(){
    return browser.get(`${this.pages['login']}`);
  }

  goToRegisterPage(){
    return browser.get(`${this.pages['register']}`);
  }

  goToForgotPasswordPage(){
    return browser.get(`${this.pages['forgotPassword']}`);
  }

  goToSetNewPasswordPage(id?: string, nonce?:string){
    return browser.get(`${this.pages['setNewPassword']}?id=${id}&nonce=${nonce}`);
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

}
