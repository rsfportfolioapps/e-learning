import { Injectable, ViewContainerRef, Inject } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { Subject, Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
import { TakeUntilDestroy } from 'src/app/services/destroy';

@Injectable()
export class DialogService<T, C, S> extends TakeUntilDestroy {
  public viewContainerRef: ViewContainerRef;
  public comp: ComponentType<C>;
  public service: BaseService<S>;
  public attr: any;
  public disableClose: boolean = true;
  public type: string;

  constructor(private router: Router, private matDialog: MatDialog) {
    super();
  }

  public open = (entity?: any): Observable<T> => {
    return new Observable<T>((o) => {
      let config = new MatDialogConfig();
      if (this.attr) {
        config.width = this.attr.width;
        config.maxWidth = this.attr.maxWidth;
      }
      config.disableClose = this.disableClose;
      let dialogRef = this.matDialog.open(this.comp, config);
      dialogRef.componentInstance['entity'] = entity;
      dialogRef.afterClosed()
        .subscribe(() => {
          if (entity && entity.redirectUrl) {
            this.router.navigateByUrl(entity.redirectUrl)
          }
          o.next(null); o.complete();
        });
    })
  }

  public openWarningModal(): void { }
  public openErrorModal(): void { }
  public openConfirmModal(): void { }
}


