/*
 * TODO: ES5 for now until I make a webpack plugin for protractor
 */
describe('App', function () {
    beforeEach(function () {
        // change hash depending on router LocationStrategy
        browser.get('/#/home');
    });
    it('should have a title', function () {
        var subject = browser.getTitle();
        var result = 'Angular2 Webpack Starter by @gdi2990 from @AngularClass';
        expect(subject).toEqual(result);
    });
    it('should have `your content here` x-large', function () {
        var subject = element(by.css('[x-large]')).getText();
        var result = 'Your Content Here';
        expect(subject).toEqual(result);
    });
});
//# sourceMappingURL=home.e2e.js.map