import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-short-tutorial',
  templateUrl: './short-tutorial.component.html',
  styleUrls: ['./short-tutorial.component.scss']
})
export class ShortTutorialComponent implements OnInit {

  @Output()
  public startTutorialEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public onStartTurotial() {
    this.startTutorialEmitter.emit(true);
  }

}
