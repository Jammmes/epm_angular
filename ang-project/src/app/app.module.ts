import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/core/app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { FormsModule } from '@angular/forms';

const routes = [
  {path: '', component: CoursesPageComponent},
  {path: 'courses', component: CoursesListComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SubheaderComponent,
    SearchPanelComponent,
    CoursesListComponent,
    CourseItemComponent,
    FooterComponent,
    CoursesPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
