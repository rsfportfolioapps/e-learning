import { AppActions, AppActionTypes } from '../actions/app.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface AppState {
  user?: any;
  isLoggedIn: boolean;
}

const initialState: AppState = {
  user: null,
  isLoggedIn: false
};

export function AppReducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.LoadApp:
      return Object.assign({}, state);

    case AppActionTypes.LoadAppSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const isLoggedIn = (state) => state.isLoggedIn;

export const getUser = (state) => state.user;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

