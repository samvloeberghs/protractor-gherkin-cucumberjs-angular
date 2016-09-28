import { Injectable } from '@angular/core';
import { HmrState } from 'angular2-hmr';

@Injectable()
export class AppState {
  // HmrState uis used by HMR to track the any state during reloading
  @HmrState() state = {};

  constructor() {

  }

  // already return a clone of the current state
  get state() {
    return this.state = this.clone(this.state);
  }

  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }


  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state[prop] || state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this.state[prop] = value;
  }


  clone(object) {
    // simple object clone
    return JSON.parse(JSON.stringify(object));
  }
}
