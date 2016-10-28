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

  xit('should go to the first step of speaker registration', () => {
    expect(stepOnePageObject.getCurrentUrl()).toEqual(browser.baseUrl + 'speaker-registration');
    //expect(stepOnePageObject.getTitle()).toEqual('');
  });

  testData.forEach((test) => {

    xit('should validate the form with ('
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
    stepOnePageObject.setName('Sam');
    browser.sleep(1000);
    stepOnePageObject.setEmail('sam@kwerri.be');
    browser.sleep(1000);
    stepOnePageObject.setDescription('Full stack dev');
    browser.sleep(1000);
    stepOnePageObject.submitForm();
    browser.sleep(1000);

    expect(stepOnePageObject.formToBeValid()).toEqual(true);


    stepTwoPageObject.setSessionType('Speaker');
    browser.sleep(1000);
    stepTwoPageObject.setSessionTitle('title');
    browser.sleep(1000);
    stepTwoPageObject.setSessionDescription('description');
    browser.sleep(1000);
    stepTwoPageObject.submitForm();
    browser.sleep(1000);

    expect(stepTwoPageObject.formToBeValid()).toEqual(true);
  })

});
