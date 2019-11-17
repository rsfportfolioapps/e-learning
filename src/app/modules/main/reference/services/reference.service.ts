import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { Reference } from '../models/reference.model';

@Injectable()
export class ReferenceService extends BaseService<Reference> {
  public getRefContent(id: number): Observable<Reference> {
    const content = `
      <mat-card class="reference">
        <h1>The lean philosophy in healthcare ${id}</h1>
        <div  class="fp-container">
          <p class="fp">
            In the last few years, Lean has become a lot more common in healthcare facilities. <br/> <br/>
            It is a proven approach that focuses on working smarter rather than working harder.
            Large improvements are achieved by eliminating waste and activities
            that have no value. This ensures high quality, low cost, reliable and shorter reaction times and better working conditions.
          </p>
          <img src="assets/images/capture.png" />
          <p class="sp">
          Healthcare facilities have to deal with stricter government regulations, insurance companies, and higher expectations
          of patients. At the same time, they have less financial means and market forces while competition is increasing.
          Healthcare facilities need to improve their efficiency while maintaining a high level of care.
          This requires managers and employees to constantly improve their work and services. <br/> <br/>
          This module covers the general points of Lean:
          The Lean philosophy and the application of the proven principles form the automotive industry in the hospital setting.
          </p>
        </div>
      </mat-card>`;

    const reference: Reference = {
      Id: null,
      content
    }
    return of(reference);
  }
}
