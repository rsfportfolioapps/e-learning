import { Action } from '@ngrx/store';

export enum CertificateActionTypes {
  LoadCertificate = '[Certificate] Load Certificate',
  LoadCertificateSuccess = '[Certificate] Load Certificate (success)'
}

export class LoadCertificate implements Action {
  readonly type = CertificateActionTypes.LoadCertificate;
}

export class LoadCertificateSuccess implements Action {
  readonly type = CertificateActionTypes.LoadCertificateSuccess;

  constructor(public payload: any) { }
}

export type CertificateActions = LoadCertificate | LoadCertificateSuccess;
