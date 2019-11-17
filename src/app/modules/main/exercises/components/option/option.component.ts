import { Component, OnInit, Input } from '@angular/core';
import { IModel } from 'src/app/models/generic.model';
import { Observable, of } from 'rxjs';
import { ExerciseHtmlContent } from '../../models/exercises.model';

export interface Option extends IModel {
  text: string;
  isCorrect: boolean;
}

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() options: Option;

  public $html: Observable<ExerciseHtmlContent[]>;
  constructor() { 
    console.log(this.$html);
  }

  ngOnInit(): void { }
  /**
   * isSubmitted && option.value === questionAnswer.answer), 
     'option-selected-right': option.value === questionAnswer.answer
   */
  public get(): Observable<boolean> {
    return new Observable<boolean>((o) => {

    })
  }

  public selAnswer(): Observable<boolean> {
    return new Observable<boolean>((o) => {
      o.next(true)
    })
  }

  public getContent(): Observable<ExerciseHtmlContent> {
    return new Observable<ExerciseHtmlContent>((c => {

    }))
  }
}
