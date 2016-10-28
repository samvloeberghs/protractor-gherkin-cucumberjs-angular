import { browser, element, by, protractor, ElementArrayFinder } from 'protractor';

import { StepOnePageObject } from './stepone.page';
import { StepTwoPageObject } from './steptwo.page';
import { StepThreePageObject } from './stepthree.page';

import testData from './data';

describe('speaker registration section', function () {

    let stepOnePageObject = new StepOnePageObject();
    let stepTwoPageObject = new StepTwoPageObject();
    let stepThreePageObject = new StepThreePageObject();

    beforeEach(() => {
        stepOnePageObject.goToStepOnePage();
    });

    it('should go to the first step of speaker registration', () => {
        expect(stepOnePageObject.getCurrentUrl()).toEqual(browser.baseUrl + 'speaker-registration');
        //expect(stepOnePageObject.getTitle()).toEqual('');
    });

    it('should validate the form with ("","","") as invalid', () => {

        let name = 'Sam', email = 'sam@kwerri.be', description = 'full stack dev';
        let state = true;

        stepOnePageObject.setName(name);
        stepOnePageObject.setEmail(email);
        stepOnePageObject.setDescription(description);
        stepOnePageObject.submitForm();

        expect(stepOnePageObject.formToBeValid()).toEqual(!state);

    });

});
