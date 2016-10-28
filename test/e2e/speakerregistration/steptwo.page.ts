import { browser, element, by, protractor, ElementArrayFinder } from 'protractor';
import Promise = webdriver.promise.Promise;

export class StepTwoPageObject {
    private title = element(by.id('step-two-title'));
    private type = element(by.id('step-two-type'));
    private description = element(by.id('step-two-description'));
    private submitButton = element(by.id('step-two-submit'));

    constructor() {

    }

    setElement(title, type, description) {
        this.title.sendKeys(title);
        this.type.sendKeys(type);
        this.description.sendKeys(description);
        this.submitButton.click();

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
