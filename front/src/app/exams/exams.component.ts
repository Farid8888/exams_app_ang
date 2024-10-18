import { Component, OnInit } from '@angular/core';
import { ExamsService } from './exam.servise';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exams',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  exams: any[] = [];

  constructor(private examService: ExamsService,private router:Router) {}

  ngOnInit() {
    this.getExams();
  }

  getExams() {
    this.examService.getExams().subscribe(data => {
      this.exams = data;
      
    });
  }

  addExam(newExam: any) {
    this.examService.addExam(newExam).subscribe((data) => {
      this.getExams();
    });
  }

  deleteExam(examId: number) {
    this.examService.deleteExam(examId).subscribe(() => {
      this.getExams();
    });
  }

  form = new FormGroup({
    courseCode:new FormControl(null),
    studentNumber:new FormControl(null),
    examDate:new FormControl(null),
    score:new FormControl(null)
  })

  onSubmit(){
    this.addExam(this.form.value);
    console.log(this.form.value)
    this.router.navigate(['results'])
  }
}
