
import { createSelector } from '@ngrx/store';
import * as fromReference from '../reducers/reference.reducer';

export const referenceState = (state) => state.reference;

export const getReferenceSelector = createSelector(
  referenceState,
  fromReference.getReference
);
