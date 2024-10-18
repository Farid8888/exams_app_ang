import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: any[] = [];

  constructor(private studentService: StudentService,private router:Router) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  addStudent(newStudent: any) {
    this.studentService.addStudent(newStudent).subscribe(() => {
      this.getStudents();
    });
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId).subscribe(() => {
      this.getStudents();
    });
  }
  form = new FormGroup({
    studentNumber:new FormControl(null),
    firstName:new FormControl(null),
    lastName:new FormControl(null),
    classRoom:new FormControl(null),
  })

  onSubmit(){
    this.addStudent(this.form.value)
    this.router.navigate(['exams'])
  }
}
