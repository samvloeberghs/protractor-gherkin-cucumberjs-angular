import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {TestCalculator} from '../test-calculator/testCalculator';


@Component({
  selector: 'home',  // <home></home>
  providers: [],
  directives: [
    ...FORM_DIRECTIVES,
    TestCalculator
  ],
  pipes: [ ],
  styles: [ require('./home.css') ],
  template: require('./home.html')
})
export class Home {
  // Set our default values
  data = { value: '' };
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

}
