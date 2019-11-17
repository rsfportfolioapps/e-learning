import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificateContainerComponent } from './containers/container-container.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  MatCardModule,
  MatButtonModule
} from '@angular/material';


export const routes: Routes = [
  {
    path: '', component: CertificateContainerComponent
  },
];

const materialModules = [
  MatCardModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    CertificateComponent,
    CertificateContainerComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ...materialModules,
    RouterModule.forChild(routes)
  ],
  entryComponents: [],
  exports: [
    RouterModule
  ]
})

export class CertificateRoutingModule { }
