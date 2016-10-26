import { ForgotPasswordPageObject } from './forgotPassword.page';
import { AuthenticationPageObject } from '../authentication.page';
import testData from './data';

describe('forgot password page', function () {

    let pageObject = new ForgotPasswordPageObject();
    let authPageObject = new AuthenticationPageObject();

    beforeEach(() => {
        authPageObject.goToForgotPasswordPage();
    });

    it('should get the forgot password page', () => {
        expect(pageObject.getTitle()).toEqual('Forgot password');
    });

    testData.forEach((test) => {

        it('should validate the forgot password form (' + test.input.email + ')', () => {
            pageObject.setEmail(test.input.email);
            pageObject.submitForm();
            expect(pageObject.formIsValid()).toEqual(test.result.valid);
        });

    });
    
});
