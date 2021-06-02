import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

/* This converts the plain typescript class to a module for Angular.
In 'declarations, we add all of the components that are part of this module.
For VS Code, it should add the import statement for CoursesComponent at the top*/
/* FOR DEPENDENCY INJECTION: In the 'Providers' section, you need to insert all the dependencies that
components in this module are depenedent upon. */
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
