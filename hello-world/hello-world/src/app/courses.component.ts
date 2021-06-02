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
  template: `<h2>[[ getTitle() ]]</h2>`
})
/* We can change the component title and then add that to our template to change various properties
displayed in the HTML */
export class CoursesComponent {
  title = "List of courses";
  /* defined method example */
  getTitle(){
    return this.title;
  }
  /* defined list example */
  courses = ["course1", "course2", "course3"];
}
