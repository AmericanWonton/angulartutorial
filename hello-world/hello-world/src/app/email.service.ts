/* The 'injectable' decorator function is needed for service dependencies in the constructor*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
