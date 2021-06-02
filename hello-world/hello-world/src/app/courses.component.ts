//Need to import this declarator to make this a component
import {Component} from '@angular/core';

/* We'll put this component on an h2 element.
Note that the template file can also be a template read into that component for HTML.
Anywhere we have an element like 'courses', Angular renders the template into that section/element */
@Component({
  selector: 'courses',
  template: '<h2>Courses</h2>'
})
export class CoursesComponent {

}
