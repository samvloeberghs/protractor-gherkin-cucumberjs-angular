import { LoginPageObject } from './login.page';
import { AuthenticationPageObject } from '../authentication.page';
import testData from './data';

describe('login page', function () {

    let pageObject = new LoginPageObject();
    let authPageObject = new AuthenticationPageObject();

    beforeEach(() => {
        authPageObject.goToLoginPage();
    });

    it('should get the login page', () => {
        expect(pageObject.getTitle()).toEqual('Login');
    });

    testData.forEach((test) => {

        it('should validate the login form (' + test.input.email + ',' + test.input.password + ')', () => {
            pageObject.setEmail(test.input.email);
            pageObject.setPassword(test.input.password);
            pageObject.submitForm();
            expect(pageObject.formIsValid()).toEqual(test.result.valid);
        });

    });


});
