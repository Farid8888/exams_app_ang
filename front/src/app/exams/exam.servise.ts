import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  private apiUrl = 'http://localhost:3000/exams';

  constructor(private http: HttpClient) {}

  getExams(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addExam(exam: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, exam);
  }

  updateExam(exam: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${exam.id}`, exam);
  }

  deleteExam(examId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${examId}`);
  }
}
