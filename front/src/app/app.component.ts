import { Component,OnInit,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StudentsComponent} from './students/students.component'
import {CoursesComponent} from './courses/courses.component'
import {ExamsComponent} from './exams/exams.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentsComponent,CoursesComponent,ExamsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exams';
  

  constructor(){
  }

}
