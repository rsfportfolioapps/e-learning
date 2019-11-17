import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  public svgPath: string = environment.svgPath;
  @Input()
  public menuTitle: string;

  @Output()
  public showLeftbarEmitter = new EventEmitter<boolean>();

  @Output()
  public showRightbarEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public toggleLeftbar(): void {
    this.showLeftbarEmitter.emit(true);
  }

  public toggleRightbar(): void {
    this.showRightbarEmitter.emit(true);
  }

}
