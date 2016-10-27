import { TodoPageObject } from './todo.page';
import testData from './data';

describe('login page', function () {

    let pageObject = new TodoPageObject();

    beforeEach(() => {
        pageObject.openPage();
    });

    it('should get the login page', () => {
        expect(pageObject.getTitle()).toEqual('Login');
    });


});
