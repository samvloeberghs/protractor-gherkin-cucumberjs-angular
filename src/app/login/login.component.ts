import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { EmailValidator } from '../email-validator';

@Component({
  selector: 'sv-login',
  providers: [],
  styles: [require('./login.component.scss')],
  template: require('./login.component.html')
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
