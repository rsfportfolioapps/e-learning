import { SimulationActions } from '../actions/simulation.action';
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface SimulationState { }

const initialState: SimulationState = {};

export function SimulationReducer(state: SimulationState = initialState, action: SimulationActions): SimulationState {
  switch (action.type) {
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

