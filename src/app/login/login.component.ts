import {Component, OnInit} from 'angular2/core';
import {FormBuilder, Validators, ControlGroup} from 'angular2/common';

import {EmailValidator} from '../email-validator';

@Component({
  selector: 'login',
  providers: [],
  directives: [],
  pipes: [],
  styles: [require('./login.scss')],
  template: require('./login.html')
})
export class Login implements OnInit {

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
      ],
      password: [
        '',
        Validators.required,
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
