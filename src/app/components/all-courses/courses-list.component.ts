import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/interface/course.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './courses-list.component.html',
})
export class CourseListComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  studentsArray: any[] = [];
  dtOptions = {};
  dtTrigger: Subject<any> = new Subject();

  courses!: Observable<Course[]>;
  course!: Course;
  deleteMessage = false;
  coursesList: any;
  isupdated = false;

  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [
        [6, 16, 20, -1],
        [6, 16, 20, 'All'],
      ],
      processing: true,
    };
    this.courseService.getCoursesList().subscribe((data) => {
      this.courses = data;
    });
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(
      (data) => {
        console.log(data);
        this.deleteMessage = true;
        this.courseService.getCoursesList().subscribe((data) => {
          this.courses = data;
        });
      },
      (error) => console.log(error)
    );
  }

  openUpdateCourseForm(id: number) {
    this.courseService.getCourse(id).subscribe(
      (data) => {
        this.course = data;
      },
      (error) => console.log(error)
    );
  }

  courseUpdateForm = new FormGroup({
    name: new FormControl(),
    duration: new FormControl(),
    availability: new FormControl(),
  });

  handleUpdateCourse(id: any) {
    const payload = this.courseUpdateForm.value;
    this.courseService.updateCourse(id, payload).subscribe(
      () => {
        this.isupdated = true;
        this.courseService.getCoursesList().subscribe((data) => {
          this.courses = data;
        });
      },
      (error) => console.log(error)
    );
  }

  get StudentName() {
    return this.courseUpdateForm.get('student_name');
  }

  get StudentEmail() {
    return this.courseUpdateForm.get('student_email');
  }

  get StudentBranch() {
    return this.courseUpdateForm.get('student_branch');
  }

  get StudentId() {
    return this.courseUpdateForm.get('student_id');
  }

  changeisUpdate() {
    this.isupdated = false;
  }
}
