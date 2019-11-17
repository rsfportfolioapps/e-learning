import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/exercises.model';
import { Store, select } from '@ngrx/store';
import { ExerciseState } from '../store/reducers/exercise.reducer';
import { getQuestions } from '../store/selectors/exercise.selector';
import { LoadExercise } from '../store/actions/exercise.action';

@Component({
  selector: 'app-exercises-container',
  templateUrl: './exercises-container.component.html',
  styleUrls: ['./exercises-container.component.scss']
})
export class ExercisesContainerComponent implements OnInit {
  constructor(private store: Store<ExerciseState>) {
    this.store.dispatch(new LoadExercise())
  }

  ngOnInit() { }
}
