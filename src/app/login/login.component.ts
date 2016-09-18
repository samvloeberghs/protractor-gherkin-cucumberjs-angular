import {Component, OnInit} from '@angular/core';

import {EmailValidator} from '../email-validator';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'login',
  providers: [],
  styles: [require('./login.scss')],
  template: require('./login.html')
})
export class Login implements OnInit {

  form: FormGroup;
  submitted = false;
  authenticated = false;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {

    this.form = this._fb.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          EmailValidator.validEmail
        ])
      ),
      password: new FormControl(
        '',
        Validators.required
      )
    });

  }

  submit(event: any) {

    this.submitted = true;

    if (this.form.valid) {
      console.log(this.form.value);
      this.authenticated = true;
    }
    event.preventDefault();
  }

}
