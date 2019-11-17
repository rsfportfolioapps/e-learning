import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { RatingDialogComponent } from './rating-dialog/rating-dialog.component';
import { DialogService } from './dialog.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatProgressBarModule
} from '@angular/material';
import { FeedbackService } from '../main/feedback/services/feedback.service';
import { HttpClientModule } from '@angular/common/http';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { SubjectDialogComponent } from './subject-dialog/subject-dialog.component';
import { TutorialDialogComponent } from './tutorial-dialog/tutorial-dialog.component';
import { HomeService } from '../main/home/home.service';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatProgressBarModule
];


@NgModule({
  declarations: [
    FeedbackDialogComponent,
    LogoutDialogComponent,
    RatingDialogComponent,
    SubjectDialogComponent,
    TutorialDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  exports: [
    FeedbackDialogComponent,
    LogoutDialogComponent,
    RatingDialogComponent,
    SubjectDialogComponent,
    TutorialDialogComponent
  ],
  providers: [DialogService, FeedbackService, HomeService],
  entryComponents: [
    FeedbackDialogComponent,
    LogoutDialogComponent,
    RatingDialogComponent,
    SubjectDialogComponent,
    TutorialDialogComponent
  ]
})
export class DialogModule { }