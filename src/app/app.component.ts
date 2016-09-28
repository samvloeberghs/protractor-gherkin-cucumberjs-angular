import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'sv-app',
  providers: [],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html'),
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
