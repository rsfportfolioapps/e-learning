import { Action } from '@ngrx/store';

export enum FeedbackActionTypes {
  LoadFeedback = '[Load Feedback] Load Feedback',
  LoadFeedbackSuccess = '[Load Feedback] Load Feedback (success)'
}

export class LoadFeedback implements Action {
  readonly type = FeedbackActionTypes.LoadFeedback;
}

export class LoadFeedbackSuccess implements Action {
  readonly type = FeedbackActionTypes.LoadFeedbackSuccess;

  constructor(public payload: any) { }
}

export type FeedbackActions = LoadFeedback | LoadFeedbackSuccess;
