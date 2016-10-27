import { StepOnePageObject } from './stepone.page';
import { StepTwoPageObject } from './steptwo.page';
import { StepThreePageObject } from './stepthree.page';

import testData from './data';

describe('login page', function () {

    let stepOnePageObject = new StepOnePageObject();
    let stepTwoPageObject = new StepTwoPageObject();
    let stepThreePageObject = new StepThreePageObject();

    beforeEach(() => {
        //pageObject.openPage();
    });

    it('should get the login page', () => {
        //expect(pageObject.getTitle()).toEqual('Login');
    });


});
