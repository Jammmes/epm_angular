import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/entities/abstract-classes/Course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() public course: Course[];
  @Output() deleteCourse: EventEmitter<any> = new EventEmitter();
  @Output() editCourse: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.editCourse.emit();
  }

  onDelete() {
    this.deleteCourse.emit();
  }

}
