import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    console.log('Add course');
  }

}
