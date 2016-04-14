import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {FormBuilder, Validators, ControlGroup} from 'angular2/common';

@Component({
  selector: 'set-new-password',
  providers: [],
  directives: [],
  pipes: [],
  styles: [require('./setNewPassword.scss')],
  template: require('./setNewPassword.html')
})
export class SetNewPassword implements OnInit {

  form: ControlGroup;
  submitted = false;
  validRequest = false;
  newPasswordSet = false;

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _routeParams: RouteParams) {
  }

  ngOnInit() {

    this.form = this._fb.group({
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(7),
          ]),
        ],
        repeatPassword: [
          '',
          Validators.required,
        ]
      },
      {
        validator: this.matchingPasswords('password', 'repeatPassword')
      }
    );

    this.validRequest = !!this._routeParams.get('id') && !!this._routeParams.get('nonce');

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

    setTimeout(()=> {
      this._router.navigate(['/Login']);
    }, 3000);

  }

  private matchingPasswords(passwordKey: string, repeatPasswordKey: string) {

    return (group: ControlGroup): {[key: string]: any} => {
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
