import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'home',  // <home></home>
  providers: [],
  directives: [],
  pipes: [],
  styles: [ require('./forgotPassword.scss') ],
  template: require('./forgotPassword.html')
})
export class ForgotPassword implements OnInit{

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Forgot Password` component');
  }

}
