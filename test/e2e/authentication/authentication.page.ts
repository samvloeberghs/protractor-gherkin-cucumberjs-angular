import Promise = webdriver.promise.Promise;

export class AuthenticationPageObject {

  private pages: Object;

  constructor() {

    this.pages = {
      'login': 'login',
      'forgotPassword': 'forgot-password',
      'register': 'register',
      'setNewPassword': 'set-new-password'
    };

  }

  openApp(): Promise<void> {
    return browser.get('');
  }

  goToLoginPage(): Promise<void> {
    return browser.get(`${this.pages['login']}`);
  }

  goToRegisterPage(): Promise<void> {
    return browser.get(`${this.pages['register']}`);
  }

  goToForgotPasswordPage(): Promise<void> {
    return browser.get(`${this.pages['forgotPassword']}`);
  }

  goToSetNewPasswordPage(id?: string, nonce?: string): Promise<void> {
    return browser.get(`${this.pages['setNewPassword']}?id=${id}&nonce=${nonce}`);
  }

  getCurrentUrl(): Promise<string> {
    return browser.getCurrentUrl();
  }
}
