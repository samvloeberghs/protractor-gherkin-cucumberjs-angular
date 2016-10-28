import { browser, element, by, protractor, ElementArrayFinder } from 'protractor';
import Promise = webdriver.promise.Promise;

export class StepTwoPageObject {
    private title = element(by.id('step-two-title'));
    private type = element(by.id('step-two-type'));
    private description = element(by.id('step-two-description'));

    constructor() {

    }

}
