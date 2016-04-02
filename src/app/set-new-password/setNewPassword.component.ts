import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'set-new-password',
  providers: [],
  directives: [],
  pipes: [],
  styles: [ require('./setNewPassword.scss') ],
  template: require('./setNewPassword.html')
})
export class SetNewPassword implements OnInit{

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Set New Password` component');
  }

}
