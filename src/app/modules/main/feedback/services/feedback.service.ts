import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { Feedback } from '../models/feedback.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class FeedbackService extends BaseService<Feedback> {
  public submit(payload?: Feedback): Observable<Feedback> {
    return new Observable((o) => {
      o.next(undefined); o.complete();
    });
  }
}