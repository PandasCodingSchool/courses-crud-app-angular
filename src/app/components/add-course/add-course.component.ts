import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../interface/course.interface';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-course.component.html',
})
export class AddCourseComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  course!: Course;
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  courseSaveForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    duration: new FormControl('', [Validators.required]),
    availability: new FormControl(),
  });

  save() {
    console.log(this.courseSaveForm.value);
    // this.course = this.courseSaveForm.value;
    this.courseService.createCourse(this.courseSaveForm.value).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  get StudentName() {
    return this.courseSaveForm.get('student_name');
  }

  get StudentEmail() {
    return this.courseSaveForm.get('student_email');
  }

  get StudentBranch() {
    return this.courseSaveForm.get('student_branch');
  }

  addStudentForm() {
    this.submitted = false;
    this.courseSaveForm.reset();
  }
}
