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

  public openApp(): webdriver.promise.Promise<void> {
    return browser.get('');
  }

  public goToLoginPage(): webdriver.promise.Promise<void> {
    return browser.get(`${this.pages['login']}`);
  }

  public goToRegisterPage(): webdriver.promise.Promise<void> {
    return browser.get(`${this.pages['register']}`);
  }

  public goToForgotPasswordPage(): webdriver.promise.Promise<void> {
    return browser.get(`${this.pages['forgotPassword']}`);
  }

  public goToSetNewPasswordPage(id?: string, nonce?: string): webdriver.promise.Promise<void> {
    return browser.get(`${this.pages['setNewPassword']}?id=${id}&nonce=${nonce}`);
  }

  public getCurrentUrl(): webdriver.promise.Promise<string> {
    return browser.getCurrentUrl();
  }
}
