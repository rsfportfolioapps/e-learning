import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppReducer, metaReducers } from './store/reducers/app.reducer';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.component';
import { AppComponent } from './app.component';
import { AppEffects } from './store/effects/app.effect';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericService } from './services/generic.service';
import { ReferenceService } from './modules/main/reference/services/reference.service';

const materialModules = [];
const primeNgModules = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    ...materialModules,
    ...primeNgModules,
    TranslateModule.forRoot(),
    StoreModule.forRoot({ app: AppReducer }, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    AppRoutingModule
  ],
  providers: [
    GenericService,
    ReferenceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
