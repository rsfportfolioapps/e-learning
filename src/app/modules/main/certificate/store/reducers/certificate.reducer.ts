import { CertificateActions } from '../actions/certificate.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface CertificateState { }

const initialState: CertificateState = {};

export function CertificateReducer(state: CertificateState = initialState, action: CertificateActions): CertificateState {
  switch (action.type) {
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

