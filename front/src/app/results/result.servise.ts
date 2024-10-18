import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private eUrl = 'http://localhost:3000/exams';
  private sUrl = 'http://localhost:3000/students';
  private cUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getExams(): Observable<any[]> {
    return this.http.get<any[]>(this.eUrl);
  }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.cUrl);
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.sUrl);
  }
 
}
