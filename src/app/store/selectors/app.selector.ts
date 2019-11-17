import { createSelector } from '@ngrx/store';
import * as fromApp from '../reducers/app.reducer';

export const appState = state => state.auth;

export const isLoggedInSelector = createSelector(
  appState,
  fromApp.isLoggedIn
);

export const userSelector = createSelector(
  appState,
  fromApp.getUser
);
