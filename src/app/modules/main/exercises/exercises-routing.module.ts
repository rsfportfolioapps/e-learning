import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExercisesContainerComponent } from './containers/exercises-container.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { QuestionComponent } from './components/question/question.component';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';
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
import { OptionComponent } from './components/option/option.component';

export const routes: Routes = [
  {
    path: '', component: ExercisesContainerComponent
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
    ExercisesContainerComponent,
    ExercisesComponent,
    QuestionComponent,
    DetailInfoComponent,
    OptionComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ...materialModules,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})

export class ExercisesRoutingModule { }
