import { Injectable } from '@angular/core';
import { Course } from '../entities/abstract-classes/Course';

@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {

  constructor() { }

  public getCourses(): Course[] {
    return [
      {
        'id': '1',
        'description': 'lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores',
        'duration': '27',
        'creationDate': '09.01.2018',
        'title': 'Video Course 1'
      },
      {
        'id': '2',
        'description': 'loremLorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores',
        'duration': '60',
        'creationDate': '19.04.2018',
        'title': 'Video Course 2'
      },
      {
        'id': '3',
        'description': 'Ipsum lorem  dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores',
        'duration': '14',
        'creationDate': '01.12.2018',
        'title': 'Video Course 3'
      },
      {
        'id': '4',
        'description': 'Dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores lorem ipsum dolores',
        'duration': '259',
        'creationDate': '10.01.2019',
        'title': 'Video Course 4'
      }
    ];
  }

}
