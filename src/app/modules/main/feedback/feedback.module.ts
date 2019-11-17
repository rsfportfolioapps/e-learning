import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FeedbackReducer } from './store/reducers/feedback.reducer';
import { FeedbackEffects } from './store/effects/feedback.effects';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    FeedbackRoutingModule,
    StoreModule.forFeature('feedback', FeedbackReducer),
    EffectsModule.forFeature([FeedbackEffects])
  ],
  exports: [],
  providers: [],
})
export class FeedbackModule {

}
