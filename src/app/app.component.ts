import { Component, ViewEncapsulation, OnInit } from '@angular/core';

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

export class AppComponent implements OnInit {

  constructor(private appState: AppState) {
  }

  ngOnInit() {

  }

}
