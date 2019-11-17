import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { Exercises, ExerciseHtmlContent, Question } from '../models/exercises.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class ExerciseService extends BaseService<Exercises> {
  public getDetailInfo(): Observable<ExerciseHtmlContent[]> {
    return of([
      {
        Id: 1,
        content: `<h2>The lean philosophy</h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscin.`
      }
    ])
  }

  public getQuestions(): Observable<Question[]> {
    return of([
      {
        Id: 1,
        title: 'Sample long statement',
        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscin.`,
        options: [
          {
            Id: 1,
            value: 'Option 1'
          },
          {
            Id: 2,
            value: 'Option 2'
          },
          {
            Id: 3,
            value: 'Option 3'
          },
          {
            Id: 4,
            value: 'Option 4'
          }
        ],
        subDescription: `Lean is a philosophy that contains methods and tools for improving processes.`
      }
    ])
  }
}


