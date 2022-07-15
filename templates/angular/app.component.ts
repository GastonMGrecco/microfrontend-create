import { Component } from '@angular/core';

const component = require('./app.component.html');
const style = require('./app.component.css')

@Component({
  selector: 'app-angular',
  template: component.default,
  styleUrls: style.default
 
})
export class AppComponent {
  title = 'appangular';
}
