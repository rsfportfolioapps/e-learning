import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { count, takeWhile } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss']
})
export class RightBarComponent implements OnInit {
  public svgPath: string = environment.svgPath
  public progressCount: number = 0;
  public courseProgress = [
    {
      title: 'The lean philosophy',
      percent: '0',
      progress: '',
    },
    {
      title: 'The five main printing',
      percent: '0',
      progress: '',
    },
    {
      title: 'Culture and Lead',
      percent: '0',
      progress: '',
    },
    {
      title: 'Waste',
      percent: '0',
      progress: '',
    },
    {
      title: 'Lean Tools',
      percent: '0',
      progress: '',
    }
  ];

  @Output()
  public closeRightbarEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    let stopCondition: boolean = false;
    const subs = interval(20).pipe(takeWhile(() => !stopCondition))
    subs.subscribe(i => {
      this.progressCount = i;
      if (i === 80) stopCondition = true;
    })
  }

  public isActive(index: number, count: number): boolean {
    return index === count;
  }

  public toggleRightbar(): void {
    this.closeRightbarEmitter.emit(false);
  }
}
