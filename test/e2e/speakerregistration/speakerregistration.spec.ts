import { browser, element, by, protractor, ElementArrayFinder } from 'protractor';

import { StepOnePageObject } from './stepone.page';
import { StepTwoPageObject } from './steptwo.page';
import { StepThreePageObject } from './stepthree.page';

import testData from './data';

describe('speaker registration section', function () {

    let stepOnePageObject   = new StepOnePageObject();
    let stepTwoPageObject   = new StepTwoPageObject();
    let stepThreePageObject = new StepThreePageObject();

    beforeEach(() => {
        stepOnePageObject.goToStepOnePage();
        stepOnePageObject.goToStepTwoPage();
    });

    // it('should go to the first step of speaker registration', () => {
    //     expect(stepOnePageObject.getCurrentUrl()).toEqual(browser.baseUrl + 'speaker-registration');
    // });
    it('should be in step 2 url', () => {
        expect(stepOnePageObject.getCurrentUrl()).toEqual(browser.baseUrl + 'speaker-registration/step-2');
    });

});
