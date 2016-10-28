import { browser, element, by, protractor, ElementArrayFinder } from 'protractor';

import { StepOnePageObject } from './stepone.page';
import { StepTwoPageObject } from './steptwo.page';
import { StepThreePageObject } from './stepthree.page';

import testData from './data';
import testDataStepTwo from './data.step-two';

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

    testData.forEach((test) => {

        it('should validate the form with ('
            + test.input.name + ',' + test.input.name + ',' + test.input.description
            + ') as ' + test.result.valid, () => {

                stepOnePageObject.setName(test.input.name);
                browser.sleep(1000);
                stepOnePageObject.setEmail(test.input.email);
                browser.sleep(1000);
                stepOnePageObject.setDescription(test.input.description);
                browser.sleep(1000);
                stepOnePageObject.submitForm();
                browser.sleep(1000);

                expect(stepOnePageObject.formToBeValid()).toEqual(test.result.valid);

            });

    });

    it('should go to the second step of speaker registration', () => {
        const test = testData.filter((test) => {
            return test.result.valid;
        })[0];
        stepOnePageObject.setName(test.input.name);
        browser.sleep(1000);
        stepOnePageObject.setEmail(test.input.email);
        browser.sleep(1000);
        stepOnePageObject.setDescription(test.input.description);
        browser.sleep(1000);
        stepOnePageObject.submitForm();
        browser.sleep(1000);

        expect(stepOnePageObject.getCurrentUrl()).toEqual(browser.baseUrl + 'speaker-registration/step-2');

        testDataStepTwo.forEach((test) => {

            console.log('should validate the form with ('
                + test.input.type + ',' + test.input.title + ',' + test.input.description
                + ') as ' + test.result.valid)

            stepTwoPageObject.setElement(test.input.title,test.input.type, test.input.description);

            expect(stepOnePageObject.formToBeValid()).toEqual(test.result.valid);

        });

    });



});
