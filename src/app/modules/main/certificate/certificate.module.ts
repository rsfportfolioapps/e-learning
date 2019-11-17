import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CertificateReducer } from './store/reducers/certificate.reducer';
import { CertificateEffects } from './store/effects/certificate.effects';
import { CertificateRoutingModule } from './certificate-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CertificateComponent } from './components/certificate/certificate.component';
import { CertificateContainerComponent } from './containers/container-container.component';

@NgModule({
  declarations: [],
  imports: [
    CertificateRoutingModule,
    SharedModule,
    StoreModule.forFeature('certificate', CertificateReducer),
    EffectsModule.forFeature([CertificateEffects])
  ],
  exports: [],
  providers: [],
})
export class CertificateModule {

}
