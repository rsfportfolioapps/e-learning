import { Component, OnInit } from '@angular/core';
import { slideInFromLeft } from '../../../../../shared/animations/transition.animation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ slideInFromLeft ]
})
export class HomeComponent implements OnInit {
  public svgPath: string = environment.svgPath;
  public startTutorial = false;
  public showTutorial = 'hidden';

  constructor() { }

  ngOnInit() {

  }

  public handleStartTutorial(isStart: boolean) {
    this.startTutorial = isStart;

    if (this.startTutorial) {
      this.showTutorial = 'shown';
    } else {
      this.showTutorial = 'hidden';
    }
  }

}
