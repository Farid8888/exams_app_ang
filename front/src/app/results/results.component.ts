import { Component, OnInit } from '@angular/core';
import {ResultService} from './result.servise';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DatePipe} from '@angular/common'

@Component({
  selector: 'app-results',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultComponent implements OnInit {
  exams: any[] = [];
  courses:any[]=[];
  students:any[]=[]

  constructor(private resultService: ResultService,private router:Router) {}

  ngOnInit() {
    this.getExams();
    this.getCourses();
    this.getStudents()
  }

  getExams() {
    this.resultService.getExams().subscribe(data => {
      this.exams = data;
    });
  }
  getCourses() {
    this.resultService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }
  getStudents() {
    this.resultService.getStudents().subscribe(data => {
      this.students = data;
    });
  }
back(){
  this.router.navigate(['/'])
}
}
