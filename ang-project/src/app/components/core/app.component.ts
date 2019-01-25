import { Component,
        OnInit,
        OnDestroy,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewChecked,
        AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  title = 'Courses list';

  ngOnInit() {
    console.log('AppComponent Init');
  }
  ngOnchange() {
    console.log('AppComponent onChange');
  }
  ngDoCheck() {
    console.log('AppComponent doCheck');
  }
  ngOnDestroy() {
    console.log('AppComponent onDestroy');
  }
  ngAfterContentInit() {
    console.log('AppComponent AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('AppComponent AfterContentChecked');
  }
  ngAfterViewChecked() {
    console.log('AppComponent AfterViewChecked');
  }
  ngAfterViewInit() {
    console.log('AppComponent AfterngAfterViewInit');
  }

}
