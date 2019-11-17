import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReferenceEffects } from './store/effects/reference.effects';
import { ReferenceReducer } from './store/reducers/reference.reducer';
import { ReferenceRoutingModule } from './reference-routing.module';
import { ReferenceService } from './services/reference.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    ReferenceRoutingModule,
    StoreModule.forFeature('reference', ReferenceReducer),
    EffectsModule.forFeature([ReferenceEffects])
  ],
  exports: [],
  providers: [
    ReferenceService
  ],
})
export class ReferenceModule { }
