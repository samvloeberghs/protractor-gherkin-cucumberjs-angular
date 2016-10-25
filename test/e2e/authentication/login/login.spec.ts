import { LoginPageObject } from './login.page';
import { AuthenticationPageObject } from '../authentication.page';

let testData = [
    {
        input: {
            email: '',
            password: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            email: '',
            password: 'thisisavalidpassword'
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            email: 'samkwerri.be',
            password: 'thisisavalidpassword'
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            email: 'sam@kwerri.be',
            password: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            email: 'sam@kwerri.be',
            password: 'thisisavalidpassword'
        },
        result: {
            valid: true
        }
    }
];

describe('todo App', function () {

    let page = new LoginPageObject();
    let authPage = new AuthenticationPageObject();

    beforeEach(() => {
        authPage.goToLoginPage();
    });

    it('should get the login page', () => {
        expect(page.getTitle()).toEqual('Login');
    });

    testData.forEach((test) => {

        it('should validate the login form (' + test.input.email + ',' + test.input.password + ')', () => {
            page.setEmail(test.input.email);
            page.setPassword(test.input.password);
            page.submitForm();
            expect(page.formIsValid()).toEqual(test.result.valid);
        });

    });


});
