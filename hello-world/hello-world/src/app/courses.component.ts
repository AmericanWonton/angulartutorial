import { CoursesService } from './courses.service';
//Need to import this declarator to make this a component
import {Component} from '@angular/core';

/* We'll put this component on an h2 element.
Note that the template file can also be a template read into that component for HTML.
Anywhere we have an element like 'courses', Angular renders the template into that section/element.
You can inspect the element in chrome to see it inserted.
Make sure you add interpolation to change your delimiters,(can't clash with golang templates). */
@Component({
  selector: 'courses',
  interpolation: ['[[', ']]'],
  /* template: '<h2>[[ getTitle() ]]</h2>' Old way */
  template: `
    <h2>[[ getTitle() ]]</h2>
    <ul>
      <li *ngFor="let course of courses">
        [[ course ]]
      </li>
    </ul>`
})
/* We can change the component title and then add that to our template to change various properties
displayed in the HTML */
export class CoursesComponent {
  title = "List of courses";
  /* We get this from our services later */
  courses;
  /* defined method example */
  getTitle(){
    return this.title;
  }
  /* defined list example */
  /* courses = ["course1", "course2", "course3"]; */
  /* Instead of listing that here, we're supposed to call an HTTP service
  instead to get data like that */
  /* Below is old way of doing it...you want Angular to keep your components up to date,
  otherwise you'll have to go back in and change ALL of them
  constructor() {
    let service = new CoursesService();
    this.courses = service.getCourses();
  }
  */
 /* With this implementation, we pass the service as an instance,(whatever that instance looks like),
 and we don't need to change anything on this module. If you add a new parameter to  the service,
 we don't need to change this module. */
 constructor(service: CoursesService) {
  this.courses = service.getCourses();
 }


}
