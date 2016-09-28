import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { EmailValidator } from '../email-validator';

@Component({
  selector: 'sv-register',
  providers: [],
  styles: [require('./register.component.scss')],
  template: require('./register.component.html')
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  registered = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.form = this.fb.group({
        name: new FormControl(
          '',
          Validators.required
        ),
        email: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            EmailValidator.validEmail
          ])
        ),
        password: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(7)
          ])
        ),
        repeatPassword: new FormControl(
          '',
          Validators.required
        )
      },
      {
        validator: this.matchingPasswords('password', 'repeatPassword')
      }
    );

  }

  submit(event: any) {

    this.submitted = true;

    if (this.form.valid) {
      console.log(this.form.value);
      this.registered = true;
    }
    event.preventDefault();

  }

  private matchingPasswords(passwordKey: string, repeatPasswordKey: string) {

    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let repeatPassword = group.controls[repeatPasswordKey];
      if (password.value !== repeatPassword.value) {
        return {
          passwordMismatch: true
        };
      }
    };

  }

}
