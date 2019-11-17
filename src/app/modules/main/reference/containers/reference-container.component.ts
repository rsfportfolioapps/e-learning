import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ReferenceState } from '../store/reducers/reference.reducer';
import { LoadReference } from '../store/actions/reference.action';
import { getReferenceSelector } from '../store/selectors/reference.selector';
import { ReferenceService } from '../services/reference.service';
import { GenericService } from 'src/app/services/generic.service';
import { Reference } from '../models/reference.model';
import { map, skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-reference-container',
  templateUrl: './reference-container.component.html',
  styleUrls: ['./reference-container.component.scss']
})
export class ReferenceContainerComponent implements OnInit {
  public reference$: Observable<any>;
  
  public content: string;

  constructor(private store: Store<ReferenceState>,
    private referenceService: ReferenceService,
    private dataService: GenericService) {
      this.store.dispatch(new LoadReference(1));
  }

  ngOnInit() {
    this.dataService.refId.pipe(
      map((id: number) => this.handleEvt(id))).subscribe();
  }

  public handleEvt(id: number) {
    this.referenceService.getRefContent(id).pipe(map((ref) => this.content = ref.content)).subscribe();
  }
}
