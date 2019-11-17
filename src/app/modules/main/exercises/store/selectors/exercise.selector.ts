import { createSelector } from '@ngrx/store';
import * as fromExercise from '../reducers/exercise.reducer';

export const exerciseState = (state) => state.exercise;

export const getQuestions = createSelector(
  exerciseState,
  fromExercise.ExerciseReducer
)

