import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ExerciseActionTypes, ExerciseActions } from '../actions/exercise.action';
import { ExerciseService } from '../../services/exercises.service';

@Injectable()
export class ExerciseEffects {
  constructor(private exerciceSrv: ExerciseService, private actions$: Actions) { }

  @Effect()
  public load$: Observable<any> = this.actions$.pipe(
    ofType(ExerciseActionTypes.load),
    mergeMap((action: ExerciseActions) =>
      zip(
        this.exerciceSrv.getDetailInfo(),
        this.exerciceSrv.getQuestions())
        .pipe(
          map(([getQuestions, detailInfo]) => {
            return {
              type: ExerciseActionTypes.LoadSuccess,
              payload: getQuestions
            };
          }),
          catchError(() => {
            return of({});
          })
        ))
  );

  private fmtRes(): any { }
}
