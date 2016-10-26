import { SetNewPasswordPageObject } from './setNewPassword.page';
import { AuthenticationPageObject } from '../authentication.page';

let testSet = {
    invalid: {
        title: 'should test if user is setting a new password with an (in)valid link',
        data: [
            {
                input: {
                    id: '',
                    nonce: ''
                },
                result: {
                    valid: false
                }
            },
            {
                input: {
                    id: '123',
                    nonce: ''
                },
                result: {
                    valid: false
                }
            },
            {
                input: {
                    id: '',
                    nonce: 'abcdefgh12345'
                },
                result: {
                    valid: false
                }
            },
            {
                input: {
                    id: '123',
                    nonce: 'abcdefgh12345'
                },
                result: {
                    valid: true
                }
            }
        ]
    },
    valid: {
        title: 'should validate the set new password form',
        data: [
            {
                input: {
                    password: '',
                    repeatPassword: ''
                },
                result: {
                    valid: false
                }
            },
            {
                input: {
                    password: '123',
                    repeatPassword: ''
                },
                result: {
                    valid: false
                }
            },
            {
                input: {
                    password: '',
                    repeatPassword: '123'
                },
                result: {
                    valid: false
                }
            },
            {
                input: {
                    password: '123',
                    repeatPassword: '321'
                },
                result: {
                    valid: false
                }
            },
            {
                input: {
                    password: '123',
                    repeatPassword: '123'
                },
                result: {
                    valid: false
                }
            },
            {
                input: {
                    password: '12345678',
                    repeatPassword: '87654321'
                },
                result: {
                    valid: false
                }
            },
            {
                input: {
                    password: '12345678',
                    repeatPassword: '12345678'
                },
                result: {
                    valid: true
                }
            }
        ]
    }
};

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
