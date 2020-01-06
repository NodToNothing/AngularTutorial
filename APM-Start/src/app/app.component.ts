import {Component} from '@angular/core';

@Component ({
  selector: 'pm-root',
  template: '<div><h1>{{pageTitle}}</h1><pm-products></pm-products><div>My First Component</div></div>' 
})
export class AppComponent {
  pageTitle: string = 'Scooters Product Management';
}