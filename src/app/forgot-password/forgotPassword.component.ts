import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

import {EmailValidator} from '../email-validator';

@Component({
  selector: 'forgot-password',
  providers: [],
  styles: [require('./forgotPassword.scss')],
  template: require('./forgotPassword.html')
})
export class ForgotPassword implements OnInit {

  form: FormGroup;
  submitted = false;
  validSubmit = false;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {

    this.form = this._fb.group({
      email: new FormControl('',
        Validators.compose([
          Validators.required,
          EmailValidator.validEmail,
        ])
      )
    });

  }

  submit(event: any) {

    this.submitted = true;

    if (this.form.valid) {
      this.validSubmit = true;
    }

    event.preventDefault();

  }

}
