import { browser, element, by, protractor, ElementArrayFinder } from 'protractor';
import Promise = webdriver.promise.Promise;

export class StepOnePageObject {

    private gotospeakerregistration = element(by.id('startspeakerregistrationprocess'));

    private name = element(by.id('step-one-name'));
    private email = element(by.id('step-one-email'));
    private description = element(by.id('step-one-description'));
    private stepOneButtonSubmit = element(by.id('step-one-submit'));

    constructor() {

    }

    goToStepOnePage() {
        browser.get('/');
        this.gotospeakerregistration.click();
        // return browser.get('/speaker-registration/step-1');
    }

    getCurrentUrl() {
        return browser.getCurrentUrl();
    }

    setEmail(email: string) {
        this.email.sendKeys(email);
    }

    setName(name: string) {
        this.name.sendKeys(name);
    }

    setDescription(description: string) {
        this.description.sendKeys(description);
    }

    submitForm() {
        this.stepOneButtonSubmit.click();
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
