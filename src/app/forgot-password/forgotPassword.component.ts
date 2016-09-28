import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { EmailValidator } from '../email-validator';

@Component({
  selector: 'sv-forgot-password',
  providers: [],
  styles: [require('./forgotPassword.component.scss')],
  template: require('./forgotPassword.component.html')
})
export class ForgotPassword implements OnInit {

  form: FormGroup;
  submitted = false;
  validSubmit = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

    this.form = this.fb.group({
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
