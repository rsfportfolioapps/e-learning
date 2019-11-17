import { FeedbackActions } from '../actions/feedback.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface FeedbackState { }
const initialState: FeedbackState = {};
export function FeedbackReducer(state: FeedbackState = initialState, action: FeedbackActions): FeedbackState {
  switch (action.type) {
    default:
      return state;
  }
}
export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

