import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TakeUntilDestroy } from 'src/app/services/destroy';
import { Tutorial } from '../../main/home/home.model';
import { HomeService } from '../../main/home/home.service';
import { map } from 'rxjs/operators';
import { IDialog } from '../dialog.interface';
import { TutorialDialogEntity } from '../dialog.models';

@Component({
  selector: 'app-tutorial-dialog',
  templateUrl: './tutorial-dialog.component.html',
  styleUrls: ['./tutorial-dialog.component.scss']
})
export class TutorialDialogComponent extends TakeUntilDestroy implements IDialog<TutorialDialogEntity>, OnInit {
  public entity: TutorialDialogEntity;
  public tutorialSelected: boolean = false;
  public tutorials: Tutorial[];

  constructor(private homeSrv: HomeService, private dialogRef: MatDialogRef<TutorialDialogComponent>) {
    super();
    this.homeSrv.getTutorials()
      .pipe(map((tutorials) => this.tutorials = tutorials))
      .subscribe();
  }

  ngOnInit() { }

  public onSelectTutorial(event: any) {
    this.tutorialSelected = true;
    const links = Array.from(document.querySelectorAll('.tutorial'));
    links.forEach(ilink => {
      ilink.classList.remove('active');
    });

    if (event.target.localName === 'div') {
      event.target.classList.add('active');
    } else {
      event.target.parentElement.classList.add('active');
    }
  }

  public confirmTutorial() {
    this.dialogRef.close();
  }
}
