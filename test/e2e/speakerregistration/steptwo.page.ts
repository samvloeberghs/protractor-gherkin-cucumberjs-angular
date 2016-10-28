import { browser, element, by, protractor, ElementArrayFinder } from 'protractor';
import Promise = webdriver.promise.Promise;

export class StepTwoPageObject {
  private gotospeakerregistration = element(by.id('startspeakerregistrationprocess'));

  private type = element(by.id('step-two-type'));
  private title = element(by.id('step-two-title'));
  private description = element(by.id('step-two-description'));
  private stepTwoButtonSubmit = element(by.id('step-two-submit'));

  constructor() {

  }

  setSessionType(type: string) {
    this.type.sendKeys(type);
  }

  setSessionTitle(title: string) {
    this.title.sendKeys(title);
  }

  setSessionDescription(description: string) {
    this.description.sendKeys(description);
  }

  submitForm() {
    this.stepTwoButtonSubmit.click();
  }

  formToBeValid() {
    return this.getAllErrorMessages().count().then(value => {
      return value === 0;
    });
  }

  private getAllErrorMessages(): ElementArrayFinder {
    return element.all(by.css('.error-group'));
  }

}
