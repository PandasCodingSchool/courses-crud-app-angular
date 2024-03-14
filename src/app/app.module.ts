import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { DataTablesModule } from 'angular-datatables';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseListComponent } from './components/all-courses/courses-list.component';

@NgModule({
  declarations: [AppComponent, CourseListComponent, AddCourseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
