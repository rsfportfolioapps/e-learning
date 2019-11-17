import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SimulationActionTypes, SimulationActions } from '../actions/simulation.action';

@Injectable()
export class SimulationEffects {
  constructor(private actions$: Actions) { }

  @Effect()
  public loadSimulation$: Observable<any> = this.actions$.pipe(
    ofType(SimulationActionTypes.LoadSimulation),
    mergeMap((action: SimulationActions) => of([1, 2, 3]).pipe(
      map(([]) => {
        return {
          type: SimulationActionTypes.LoadSimulationSuccess,
          payload: null
        };
      }),
      catchError(() => of({}))
    ))
  );
}
