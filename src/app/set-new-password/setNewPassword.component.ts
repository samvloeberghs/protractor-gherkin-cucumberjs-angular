import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'set-new-password',
  providers: [],
  styles: [require('./setNewPassword.scss')],
  template: require('./setNewPassword.html')
})
export class SetNewPassword implements OnInit {

  form: FormGroup;
  submitted = false;
  validRequest = false;
  newPasswordSet = false;

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.form = this._fb.group({
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
        validator: this._matchingPasswords('password', 'repeatPassword')
      }
    );

    this._activatedRoute.queryParams.subscribe(params => {
      this.validRequest = !!params['id'] && !!params['nonce'];
    });
  }

  submit(event: any) {

    this.submitted = true;

    if (this.form.valid) {
      console.log(this.form.value);
      this.newPasswordSet = true;
      this._navigateToLogin();
    }
    event.preventDefault();

  }

  private _navigateToLogin() {

    setTimeout(() => {
      this._router.navigate(['/login']);
    }, 3000);

  }

  private _matchingPasswords(passwordKey: string, repeatPasswordKey: string) {

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
