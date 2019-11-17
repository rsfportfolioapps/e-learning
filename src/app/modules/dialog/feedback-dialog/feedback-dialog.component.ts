import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailRegex } from 'src/app/shared/utils/validator.util';
import { IDialog } from '../dialog.interface';
import { TakeUntilDestroy } from 'src/app/services/destroy';
import { FeedbackDialogEntity } from '../dialog.models';
import { FeedbackService } from '../../main/feedback/services/feedback.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent extends TakeUntilDestroy implements IDialog<FeedbackDialogEntity>, OnInit {
  public entity: FeedbackDialogEntity;
  public feedbackForm: FormGroup;

  constructor(private fbSrv: FeedbackService,
    public dialogRef: MatDialogRef<FeedbackDialogEntity>, public router: Router, private fb: FormBuilder) {
    super();
    this.feedbackForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex.email)])],
      comment: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() { }

  public onSubmit(): void {
    this.fbSrv.submit()
      .pipe(tap(() => this.entity.isSuccessfullySubmitted = !this.entity.isSuccessfullySubmitted))
      .subscribe(() => {
        console.log('%cFeedback submitted 🙈💥', 'background-color:green;color:white;');
      })
  }

  public onClose() {
    this.dialogRef.close();
  }
}
