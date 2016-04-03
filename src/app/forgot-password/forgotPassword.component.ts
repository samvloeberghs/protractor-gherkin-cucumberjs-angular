import {Component, OnInit} from 'angular2/core';
import {FormBuilder, Validators, ControlGroup} from 'angular2/common';

import {EmailValidator} from '../email-validator';

@Component({
  selector: 'forgot-password',
  providers: [],
  directives: [],
  pipes: [],
  styles: [ require('./forgotPassword.scss') ],
  template: require('./forgotPassword.html')
})
export class ForgotPassword implements OnInit{

  form: ControlGroup;
  submitted = false;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {

    this.form = this._fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          EmailValidator.validEmail,
        ])
      ]
    });

  }

  submit(event: any) {

    this.submitted = true;

    if (this.form.valid) {
      console.log(this.form.value);
    }
    event.preventDefault();

  }

}
