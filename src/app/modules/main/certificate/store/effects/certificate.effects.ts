import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CertificateActionTypes, CertificateActions } from '../actions/certificate.action';

@Injectable()
export class CertificateEffects {
  constructor(private actions$: Actions) { }

  @Effect()
  public loadCertificate$: Observable<any> = this.actions$.pipe(
    ofType(CertificateActionTypes.LoadCertificate),
    mergeMap((action: CertificateActions) => of([1, 2, 3]).pipe(
      map(([sampleArr]) => {
        return {
          type: CertificateActionTypes.LoadCertificateSuccess,
          payload: null
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );
}
