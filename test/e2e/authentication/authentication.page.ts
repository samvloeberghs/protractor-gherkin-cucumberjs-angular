import {browser} from 'protractor/globals';
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

  public openApp(): Promise<void> {
    return browser.get('');
  }

  public goToLoginPage(): Promise<void> {
    return browser.get(`${this.pages['login']}`);
  }

  public goToRegisterPage(): Promise<void> {
    return browser.get(`${this.pages['register']}`);
  }

  public goToForgotPasswordPage(): Promise<void> {
    return browser.get(`${this.pages['forgotPassword']}`);
  }

  public goToSetNewPasswordPage(id?: string, nonce?: string): Promise<void> {
    return browser.get(`${this.pages['setNewPassword']}?id=${id}&nonce=${nonce}`);
  }

  public getCurrentUrl(): Promise<string> {
    return browser.getCurrentUrl();
  }
}
