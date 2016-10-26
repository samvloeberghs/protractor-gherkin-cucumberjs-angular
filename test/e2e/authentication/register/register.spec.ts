import { RegisterPageObject } from './register.page';
import { AuthenticationPageObject } from '../authentication.page';

let testData = [
    {
        input: {
            name: '',
            email: '',
            password: '',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: '',
            password: '',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'samkwerri',
            password: '',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: '',
            email: 'sam@kwerri.be',
            password: '',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'sam@kwerri.be',
            password: '',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'sam@kwerri.be',
            password: '1234567',
            repeatPassword: ''
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'sam@kwerri.be',
            password: '',
            repeatPassword: '1234567'
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'sam@kwerri.be',
            password: '1234567',
            repeatPassword: '7654321'
        },
        result: {
            valid: false
        }
    },
    {
        input: {
            name: 'Sam Vloeberghs',
            email: 'sam@kwerri.be',
            password: '1234567',
            repeatPassword: '1234567'
        },
        result: {
            valid: true
        }
    }
];

describe('register page', function () {

    let pageObject = new RegisterPageObject();
    let authPageObject = new AuthenticationPageObject();

    beforeEach(() => {
        authPageObject.goToRegisterPage();
    });

    it('should get the register page', () => {
        expect(pageObject.getTitle()).toEqual('Register');
    });

    testData.forEach((test) => {

        it('should validate the register form (' + test.input.name + ',' + test.input.email + ',' + test.input.password+ ',' + test.input.repeatPassword + ')', () => {
            pageObject.setName(test.input.name);
            pageObject.setEmail(test.input.email);
            pageObject.setPassword(test.input.password);
            pageObject.setRepeatPassword(test.input.repeatPassword);
            pageObject.submitForm();
            expect(pageObject.formIsValid()).toEqual(test.result.valid);
        });

    });


});
