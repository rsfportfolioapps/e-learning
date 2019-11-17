import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TakeUntilDestroy } from './destroy';

@Injectable()
export class GenericService extends TakeUntilDestroy {
  private refSource = new BehaviorSubject(1);
  public refId = this.refSource.asObservable();

  public changeRefId(id: number) {
    this.refSource.next(id);
  }
}