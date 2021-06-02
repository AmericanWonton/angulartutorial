import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';

/* This selector can be found in index.html, for the whole app. The template is external, so we can find it under the app
folder, in that app.component.html file */
@Component({
  selector: 'app-root',
  interpolation: ['[[', ']]'],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Hewwo World';
}
