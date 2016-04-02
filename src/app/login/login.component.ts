import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'login',
  providers: [],
  directives: [],
  pipes: [],
  styles: [ require('./login.scss') ],
  template: require('./login.html')
})
export class Login implements OnInit{

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Login` component');
  }

}
