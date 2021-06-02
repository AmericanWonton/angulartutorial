/* This is a decorated component which can be used elsewhere */

export class CoursesService {
  /* Ideally you'd call HTTP to get this information */
  getCourses(){
    return ["course1", "course2", "course3"];
  }
}
