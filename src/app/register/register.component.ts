import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'register',
  providers: [],
  directives: [],
  pipes: [],
  styles: [ require('./register.scss') ],
  template: require('./register.html')
})
export class Register implements OnInit{

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Register` component');
  }

}
