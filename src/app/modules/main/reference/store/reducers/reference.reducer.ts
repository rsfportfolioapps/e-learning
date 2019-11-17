import { ReferenceActions, ReferenceActionTypes } from '../actions/reference.action';
import { Reference } from '../../models/reference.model';

export interface ReferenceState {
  reference?: Reference;
  deleteSuccess?: boolean;
}

const initialState: ReferenceState = {
  reference: null,
  deleteSuccess: false
};

export function ReferenceReducer(state = initialState, action: ReferenceActions): ReferenceState {
  switch (action.type) {
    case ReferenceActionTypes.LoadReferenceAction:
      return Object.assign({}, state);

    case ReferenceActionTypes.LoadReferenceSuccessAction:
      return Object.assign({}, state, {
        reference: action.payload
      });
    default:
      return state;
  }
}

export const getReference = (state: ReferenceState) => state.reference;

