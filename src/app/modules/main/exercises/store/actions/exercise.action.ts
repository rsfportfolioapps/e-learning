import { Action } from '@ngrx/store';

export enum ExerciseActionTypes {
  load = '[Exercise] Load Exercise',
  LoadSuccess = '[Exercise] Load Exercise (success)'
}

export class LoadExercise implements Action {
  readonly type = ExerciseActionTypes.load;
}
export class LoadExerciseSuccess implements Action {
  readonly type = ExerciseActionTypes.LoadSuccess;
  constructor(public payload: any) { }
}

export type ExerciseActions = LoadExercise | LoadExerciseSuccess;
