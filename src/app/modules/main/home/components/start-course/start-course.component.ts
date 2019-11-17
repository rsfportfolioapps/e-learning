import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/modules/dialog/dialog.service';
import { StartCourseEntity } from 'src/app/modules/dialog/dialog.models';
import { HomeService } from '../../home.service';
import { SubjectDialogComponent } from 'src/app/modules/dialog/subject-dialog/subject-dialog.component';

@Component({
  selector: 'app-start-course',
  templateUrl: './start-course.component.html',
  styleUrls: ['./start-course.component.scss']
})
export class StartCourseComponent implements OnInit {
  constructor(private dialogSrv: DialogService<StartCourseEntity, SubjectDialogComponent, HomeService>) { }

  ngOnInit() { }

  public openSubjectDialog(): void {
    Object.assign(this.dialogSrv, {
      comp: SubjectDialogComponent,
      attr: { width: '1088px', maxWidth: '95vw' },
      disableClose: false
    });
    this.dialogSrv.open().subscribe();
  }
}
