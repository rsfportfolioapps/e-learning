import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ExerciseReducer } from './store/reducers/exercise.reducer';
import { ExerciseEffects } from './store/effects/exercise.effects';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExerciseService } from './services/exercises.service';

@NgModule({
  declarations: [
  ],
  imports: [
    ExercisesRoutingModule,
    StoreModule.forFeature('exercise', ExerciseReducer),
    EffectsModule.forFeature([ExerciseEffects])
  ],
  exports: [],
  providers: [ExerciseService],
})

export class ExerciseModule { }
