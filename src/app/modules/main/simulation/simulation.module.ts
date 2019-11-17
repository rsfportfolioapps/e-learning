import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SimulationReducer } from './store/reducers/simulation.reducer';
import { SimulationEffects } from './store/effects/simulation.effects';
import { SimulationRoutingModule } from './simulation-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SimulationRoutingModule,
    StoreModule.forFeature('simulation', SimulationReducer),
    EffectsModule.forFeature([SimulationEffects])
  ],
  exports: [],
  providers: [],
})
export class SimulationModule { }
