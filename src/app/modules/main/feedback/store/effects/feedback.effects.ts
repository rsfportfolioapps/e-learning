import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FeedbackActionTypes, FeedbackActions } from '../actions/feedback.action';

@Injectable()
export class FeedbackEffects {
  constructor(private actions$: Actions) { }
  @Effect()
  public loadFeedback$: Observable<any> = this.actions$.pipe(
    ofType(FeedbackActionTypes.LoadFeedback),
    mergeMap((action: FeedbackActions) => of([]).pipe(
      map(([]) => {
        return {
          type: FeedbackActionTypes.LoadFeedbackSuccess,
          payload: null
        };
      }),
      catchError(() => of({}))
    ))
  );
}
