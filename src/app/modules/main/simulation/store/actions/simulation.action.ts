import { Action } from '@ngrx/store';

export enum SimulationActionTypes {
  LoadSimulation = '[Simulation] Load Simulation',
  LoadSimulationSuccess = '[Simulation] Load Simulation (success)'
}
export class LoadSimulation implements Action {
  readonly type = SimulationActionTypes.LoadSimulation;
}

export class LoadSimulationSuccess implements Action {
  readonly type = SimulationActionTypes.LoadSimulationSuccess;
  constructor(public payload: any) { }
}

export type SimulationActions = LoadSimulation | LoadSimulationSuccess;
