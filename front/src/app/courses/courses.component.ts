import { Component, OnInit } from '@angular/core';
import { CoursesService } from './course.servise';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  err:any = ''
  constructor(private courseService: CoursesService,private router:Router) {}
  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  addCourse(course: any) {
    this.courseService.addCourse(course).subscribe((data) => {
      if(data.message){
        this.err = data.message
      }
    });
  }

  deleteCourse(studentId: number) {
    this.courseService.deleteCourse(studentId).subscribe(() => {
      this.getCourses();
    });
  }

  form = new FormGroup({
    courseCode:new FormControl(null),
    courseName:new FormControl(null),
    classRoom:new FormControl(null),
    teacherFirstName:new FormControl(null),
    teacherLastName:new FormControl(null)
  })

  onSubmit(){
    this.addCourse(this.form.value);
    this.router.navigate(['students'])
  }
  
}
