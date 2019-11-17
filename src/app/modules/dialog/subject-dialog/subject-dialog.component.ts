import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TakeUntilDestroy } from 'src/app/services/destroy';
import { IDialog } from '../dialog.interface';
import { SubjectDialogEntity, FeedbackDialogEntity } from '../dialog.models';
import { HomeService } from '../../main/home/home.service';
import { map } from 'rxjs/operators';
import { Subject } from '../../main/home/home.model';

@Component({
  selector: 'app-subject-dialog',
  templateUrl: './subject-dialog.component.html',
  styleUrls: ['./subject-dialog.component.scss']
})
export class SubjectDialogComponent extends TakeUntilDestroy implements IDialog<SubjectDialogEntity>, OnInit {
  public entity: FeedbackDialogEntity;
  public subjectSelected = false;
  public subjects: Subject[];

  constructor(private homeSrv: HomeService, private dialogRef: MatDialogRef<SubjectDialogComponent>) {
    super();
    this.homeSrv.getSubjects()
      .pipe(map((subjects) => this.subjects = subjects))
      .subscribe();
  }

  ngOnInit() { }

  public onSelectSubject(event: any) {
    this.subjectSelected = true;
    const links = Array.from(document.querySelectorAll('.subject'));
    links.forEach(ilink => {
      ilink.classList.remove('active');
    });

    if (event.target.localName === 'div') {
      event.target.classList.add('active');
    } else {
      event.target.parentElement.classList.add('active');
    }
  }

  public confirmSubject() {
    this.dialogRef.close();
  }

}
