import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ReferenceActionTypes, LoadReference } from '../actions/reference.action';
import { ReferenceService } from '../../services/reference.service';

@Injectable()
export class ReferenceEffects {
  constructor(private actions$: Actions,
    private referenceService: ReferenceService) { }

  @Effect({ dispatch: true })
  public loadReference$: Observable<any> = this.actions$.pipe(
    ofType(ReferenceActionTypes.LoadReferenceAction),
    mergeMap((action: LoadReference) => this.referenceService.getRefContent(action.payload).pipe(
      map((res: any) => {
        return {
          type: ReferenceActionTypes.LoadReferenceSuccessAction,
          payload: res
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );
}
