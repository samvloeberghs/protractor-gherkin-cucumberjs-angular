import {Component, Injector} from 'angular2/core';

@Component({
  selector: 'test-calculator',  // <test-calculator></test-calculator>
  providers: [],
  directives: [],
  pipes: [],
  styles: [require('./testCalculator.scss')],
  template: require('./testCalculator.html')
})

export class TestCalculator {

  public valueOne: string = '0';
  public valueTwo: string = '0';
  public resultValue: number;

  constructor() {
  }

  calculateResult() {
    this.resultValue = parseInt(this.valueOne, 10) + parseInt(this.valueTwo, 10);
  }

  ngOnInit() {
    console.log('hello test calculator component');
  }

}
