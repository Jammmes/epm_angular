import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/entities/abstract-classes/Course';
import { GetCoursesService } from 'src/app/services/get-courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: Course[] =  [];

  constructor(private getCoursesService: GetCoursesService) { }

  ngOnInit() {
    this.courses = this.getCoursesService.getCourses();
  }

  loadMore() {
    console.log('Load more courses');
  }

  delete(id) {
    console.log('Delete course # ', id);
  }

  edit(id) {
    console.log('Edit course # ', id);
  }

}
