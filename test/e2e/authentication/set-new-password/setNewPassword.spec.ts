import { SetNewPasswordPageObject } from './setNewPassword.page';
import { AuthenticationPageObject } from '../authentication.page';
import testSet from './data';

describe('set new password page', function () {

    let pageObject = new SetNewPasswordPageObject();
    let authPageObject = new AuthenticationPageObject();

    testSet.invalid.data.forEach((test) => {

        it(testSet.valid.title + ' (' + test.input.id + ', ' + test.input.nonce + ')', () => {
            authPageObject.goToSetNewPasswordPage(test.input.id, test.input.nonce);
            expect(pageObject.hasAlertMessages()).toEqual(!test.result.valid);
        });

    });

    testSet.valid.data.forEach((test) => {

        it(testSet.valid.title + ' (' + test.input.password + ', ' + test.input.repeatPassword + ')', () => {
            authPageObject.goToSetNewPasswordPage('1', '123');
            pageObject.setPassword(test.input.password);
            pageObject.setRepeatPassword(test.input.repeatPassword);
            pageObject.submitForm();
            expect(pageObject.formIsValid()).toEqual(test.result.valid);
        });

    });


});
