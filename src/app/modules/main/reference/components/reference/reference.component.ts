import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ReferenceState } from '../../store/reducers/reference.reducer';
import { getReferenceSelector } from '../../store/selectors/reference.selector';
import { Reference } from '../../models/reference.model';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
  public refId: number;
  @Input()
  public content: any;
  @Output()
  public changeEmitter = new EventEmitter<number>();
  public reference$: Observable<Reference>;

  constructor(private store: Store<ReferenceState>) {
    this.reference$ = this.store.pipe(select(getReferenceSelector));
  }

  ngOnInit() { }

  public handleSelectedReference(id: number) {
    this.changeEmitter.emit(this.refId = id);
  }
}
