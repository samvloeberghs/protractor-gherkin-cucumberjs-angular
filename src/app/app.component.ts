import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [],
  styles: [require('./app.scss')],
  template: require('./app.html'),
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
