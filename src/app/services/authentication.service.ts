import { Injectable } from '@angular/core';

@Injectable()
export class Authentication {

  private authenticated = false;

  constructor() {
  }

  get authenticated() {
    return this.authenticated;
  }

  set authenticated(authenticated: boolean) {
    this.authenticated = authenticated;
  }

}
