import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReferenceContainerComponent } from './containers/reference-container.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { SharedModule } from 'src/app/shared/shared.module';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatDialogModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatListModule
} from '@angular/material';
import { ReferenceService } from './services/reference.service';

export const routes: Routes = [
  {
    path: '', component: ReferenceContainerComponent
  },
];

const materialModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule,
  MatListModule
];

@NgModule({
  declarations: [
    ReferenceContainerComponent,
    ReferenceComponent
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
  ],
  providers: [
    ReferenceService
  ]
})

export class ReferenceRoutingModule { }
