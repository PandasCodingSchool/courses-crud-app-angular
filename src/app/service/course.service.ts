import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../interface/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:8081/';

  constructor(private http: HttpClient) {}

  getCoursesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'students-list');
  }

  createCourse(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'save-student', student);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-student/${id}`, {
      responseType: 'text',
    });
  }

  getCourse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/student/${id}`);
  }

  updateCourse(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-student/${id}`, value);
  }
}
