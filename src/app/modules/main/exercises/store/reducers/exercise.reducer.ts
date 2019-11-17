import { ExerciseActions, ExerciseActionTypes } from '../actions/exercise.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { Question } from '../../models/exercises.model';

export interface ExerciseState {
  questions?: Question[];
}

const initialState: ExerciseState = {
  questions: null
};

export function ExerciseReducer(state: ExerciseState = initialState, action: ExerciseActions): ExerciseState {
  switch (action.type) {
    case ExerciseActionTypes.LoadSuccess:
      return Object.assign({}, state, {
        questions: action.payload
      });

    default:
      return state;
  }
}

export const questions = (state: ExerciseState) => {
  debugger
  return state.questions;
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

