import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, ControlGroup} from '@angular/common';

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
  validSubmit = false;

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
      this.validSubmit = true;
    }

    event.preventDefault();

  }

}
