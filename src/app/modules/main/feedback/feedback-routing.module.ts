import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackContainerComponent } from './containers/feedback-container.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule, MatDialogRef } from '@angular/material';

export const routes: Routes = [
  {
    path: '', component: FeedbackContainerComponent
  },
];

const materialModules = [
  MatCardModule,
];

@NgModule({
  declarations: [
    FeedbackContainerComponent,
    FeedbackComponent
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
  exports: [
    RouterModule
  ],

  providers: []
})

export class FeedbackRoutingModule { }
