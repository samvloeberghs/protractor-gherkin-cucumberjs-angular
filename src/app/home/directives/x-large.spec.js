var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
// Load the implementations that should be tested
var x_large_1 = require('./x-large');
testing_1.describe('x-large directive', function () {
    // Create a test component to test directives
    var TestComponent = (function () {
        function TestComponent() {
        }
        TestComponent = __decorate([
            core_1.Component({
                template: '',
                directives: [x_large_1.XLarge]
            }), 
            __metadata('design:paramtypes', [])
        ], TestComponent);
        return TestComponent;
    })();
    testing_1.it('should sent font-size to x-large', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb.overrideTemplate(TestComponent, '<div x-large>Content</div>')
            .createAsync(TestComponent).then(function (fixture) {
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement.children[0];
            expect(compiled.style.fontSize).toBe('x-large');
        });
    }));
});
//# sourceMappingURL=x-large.spec.js.map