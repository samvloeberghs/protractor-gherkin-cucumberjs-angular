import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';

// Load the implementations that should be tested
import {TestCalculator} from './TestCalculator';

describe('IwTest', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    TestCalculator
  ]);

  it('should have the default values', inject([ TestCalculator ], (iwTest) => {
    expect(iwTest.valueOne).toEqual('0');
    expect(iwTest.valueTwo).toEqual('0');
    expect(iwTest.resultValue).toBeUndefined();
  }));

  it('should log calculate the new value', inject([ TestCalculator ], (iwTest) => {

    iwTest.valueOne = 1;
    iwTest.valueTwo = 2;

    expect(iwTest.resultValue).toBeUndefined();
    iwTest.calculateResult();
    expect(iwTest.resultValue).toEqual(3);

  }));

});
