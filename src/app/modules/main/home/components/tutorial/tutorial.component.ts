import { Component, OnInit } from '@angular/core';
import { TutorialDialogComponent } from 'src/app/modules/dialog/tutorial-dialog/tutorial-dialog.component';
import { DialogService } from 'src/app/modules/dialog/dialog.service';
import { TutorialDialogEntity } from 'src/app/modules/dialog/dialog.models';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  constructor(private dialogSrv: DialogService<TutorialDialogEntity, TutorialDialogComponent, HomeService>) { }

  ngOnInit() { }

  public openTutorialDialog(): void {
    Object.assign(this.dialogSrv, {
      comp: TutorialDialogComponent,
      attr: { width: '1088px', maxWidth: '95vw' },
      disableClose: false
    });
    this.dialogSrv.open().subscribe();
  }
}
