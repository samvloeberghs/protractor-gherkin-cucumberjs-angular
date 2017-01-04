import { browser } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';

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

  openApp(): wdpromise.Promise<void> {
    return browser.get('');
  }

  goToLoginPage(): wdpromise.Promise<void> {
    return browser.get(`${this.pages['login']}`);
  }

  goToRegisterPage(): wdpromise.Promise<void> {
    return browser.get(`${this.pages['register']}`);
  }

  goToForgotPasswordPage(): wdpromise.Promise<void> {
    return browser.get(`${this.pages['forgotPassword']}`);
  }

  goToSetNewPasswordPage(id?: string, nonce?: string): wdpromise.Promise<void> {
    return browser.get(`${this.pages['setNewPassword']}?id=${id}&nonce=${nonce}`);
  }

  getCurrentUrl(): wdpromise.Promise<string> {
    return browser.getCurrentUrl();
  }
}
