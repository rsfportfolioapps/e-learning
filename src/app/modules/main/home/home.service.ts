import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from './home.model';

@Injectable()
export class HomeService {
  public getSubjects(): Observable<Subject[]> {
    return of([
      { title: 'The Lean Philosophy 1', Id: 1 },
      { title: 'The Lean Philosophy of testing ellipsis for subject display 2', Id: 2 },
      { title: 'The Lean Philosophy 3', Id: 3 },
      { title: 'The Lean Philosophy 4', Id: 4 },
      { title: 'The Lean Philosophy 5', Id: 5 },
      { title: 'The Lean Philosophy 6', Id: 6 },
      { title: 'The Lean Philosophy 7', Id: 7 },
      { title: 'The Lean Philosophy 8', Id: 8 },
      { title: 'The Lean Philosophy 9', Id: 9 },
      { title: 'The Lean Philosophy 10', Id: 10 },
      { title: 'The Lean Philosophy 11', Id: 11 },
      { title: 'The Lean Philosophy 12', Id: 12 },
      { title: 'The Lean Philosophy 13', Id: 13 },
      { title: 'The Lean Philosophy 14', Id: 14 },
      { title: 'The Lean Philosophy 15', Id: 15 },
    ])
  }

  public getTutorials(): Observable<any> {
    return of([
      { title: 'The Lean Philosophy', id: 1 },
      { title: 'Waste', id: 2 },
      { title: 'The Lean Philosophy of testing ellipsis for tutorial display', id: 3 },
      { title: 'Lean Tools', id: 4 },
      { title: 'Culture and Leadership', id: 5 }
    ]);
  }
}