import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeReducer } from './store/reducers/home.reducer';
import { HomeEffects } from './store/effects/home.effects';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule,
    CommonModule,
    StoreModule.forFeature('reference', HomeReducer),
    EffectsModule.forFeature([HomeEffects])
  ],
  exports: [],
  providers: [],
})
export class HomeModule { }
