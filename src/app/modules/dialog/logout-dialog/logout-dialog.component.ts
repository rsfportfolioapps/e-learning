import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LogoutDialogEntity } from '../dialog.models';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LogoutDialogEntity>) { }

  ngOnInit() { }

  public onClose() {
    this.dialogRef.close();
  }
  public onLogout(): void { }
}
