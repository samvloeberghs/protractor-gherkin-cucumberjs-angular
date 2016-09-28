import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'sv-set-new-password',
  providers: [],
  styles: [require('./setNewPassword.component.scss')],
  template: require('./setNewPassword.component.html')
})
export class SetNewPasswordComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  validRequest = false;
  newPasswordSet = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.form = this.fb.group({
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

    this.activatedRoute.queryParams.subscribe(params => {
      this.validRequest = !!params['id'] && !!params['nonce'];
    });
  }

  submit(event: any) {

    this.submitted = true;

    if (this.form.valid) {
      console.log(this.form.value);
      this.newPasswordSet = true;
      this.navigateToLogin();
    }
    event.preventDefault();

  }

  private navigateToLogin() {

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);

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
