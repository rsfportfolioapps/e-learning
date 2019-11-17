import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class TakeUntilDestroy implements OnDestroy {
  public showSpinner: boolean;
  protected destroy$: Subject<boolean> = new Subject<boolean>();
  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  protected showLoader() { }
}