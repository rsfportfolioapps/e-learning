import { HomeActions } from '../actions/home.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface HomeState {
}

const initialState: HomeState = {
};

export function HomeReducer(state: HomeState = initialState, action: HomeActions): HomeState {
  switch (action.type) {
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

