import { Action } from '@ngrx/store';
import { Reference } from '../../models/reference.model';

export enum ReferenceActionTypes {
  LoadReferenceAction = '[Load Reference] Load Reference Action',
  LoadReferenceSuccessAction = '[Load Reference] Load Reference Action (success)'
}

export class LoadReference implements Action {
  readonly type = ReferenceActionTypes.LoadReferenceAction;
  constructor(public payload: number) {}
}

export class LoadReferenceSuccess implements Action {
  readonly type = ReferenceActionTypes.LoadReferenceSuccessAction;
  constructor(public payload: Reference) { }
}

export type ReferenceActions = LoadReference | LoadReferenceSuccess;
