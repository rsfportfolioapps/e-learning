import { Component, OnInit, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { MenuAttr, MenuText } from 'src/app/models/shared.enum';
import { environment } from 'src/environments/environment';
import { DialogService } from 'src/app/modules/dialog/dialog.service';
import { FeedbackDialogComponent } from 'src/app/modules/dialog/feedback-dialog/feedback-dialog.component';
import { FeedbackDialogEntity, CertificateDialogEntity, LogoutDialogEntity } from 'src/app/modules/dialog/dialog.models';
import { FeedbackService } from 'src/app/modules/main/feedback/services/feedback.service';
import { SearchComponent } from '../search/search.component';
import { LogoutDialogComponent } from 'src/app/modules/dialog/logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {
  public svgPath: string = environment.svgPath;
  public menus: MenuAttr[] = [
    {
      text: 'Home',
      route: '/home',
      icon: 'menu-home.svg'
    },
    {
      text: 'Exercises',
      route: '/exercises',
      icon: 'menu-exercises.svg'
    },
    {
      text: 'Reference Texts',
      route: '/reference',
      icon: 'menu-references.svg'
    },
    {
      text: 'Simulation',
      route: '/simulation',
      icon: 'menu-simulation.svg'
    },
    {
      text: 'Certificate',
      route: '/certificate',
      icon: 'menu-certificate.svg'
    },
    {
      text: 'Feedback',
      route: '/feedback',
      icon: 'menu-feedback.svg'
    }
  ];
  private menuText = MenuText;
  @Output()
  public closeLeftbarEmitter = new EventEmitter<boolean>();
  @Output()
  public menuTitleEmitter = new EventEmitter<string>();

  constructor(public viewContainerRef: ViewContainerRef,
    private dialogSrv: DialogService<
      FeedbackDialogEntity | CertificateDialogEntity | LogoutDialogEntity,
      FeedbackDialogComponent | SearchComponent | LogoutDialogComponent,
      FeedbackService>) {
  }

  ngOnInit(): void { }

  public gotoRoute(attr: MenuAttr): void {
    switch (attr.text) {
      case this.menuText.feedback:
        Object.assign(this.dialogSrv, {
          comp: FeedbackDialogComponent
        });
        this.dialogSrv.open({ redirectUrl: '/reference' }).subscribe();
        this.closeLeftbarEmitter.emit(false);
        break;

      default:
        this.closeLeftbarEmitter.emit(false);
        this.menuTitleEmitter.emit(attr.text);
        break;
    }
  }

  public openSearchDialog(): void {
    Object.assign(this.dialogSrv, {
      comp: SearchComponent
    });
    this.dialogSrv.open().subscribe();
    this.closeLeftbarEmitter.emit(false);
  }

  public onSignout(): void {
    Object.assign(this.dialogSrv, {
      comp: LogoutDialogComponent
    });
    this.dialogSrv.open().subscribe();
    this.closeLeftbarEmitter.emit(false);
  }

  public toggleLeftbar(): void {
    this.closeLeftbarEmitter.emit(false);
  }
}

