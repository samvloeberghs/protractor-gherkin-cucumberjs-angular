import {Injectable} from '@angular/core';

@Injectable()
export class Authentication {

  private _authenticated = false;

  constructor() {
  }

  get authenticated() {
    return this._authenticated;
  }

  set authenticated(authenticated: boolean) {
    this._authenticated = authenticated;
  }

}
