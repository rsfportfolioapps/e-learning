import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AppActionTypes, AppActions } from '../actions/app.action';

export interface AppPayloadCollection {
  loadData: any;
}

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) { }

  @Effect()
  public loadApp$: Observable<any> = this.actions$.pipe(
    ofType(AppActionTypes.LoadApp),
    mergeMap((action: AppActions) => of([1, 2, 3]).pipe(
      map(([sampleArr]) => {
        return {
          type: AppActionTypes.LoadAppSuccess,
          payload: null
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );
}
