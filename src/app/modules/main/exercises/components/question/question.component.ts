import { Component, OnInit, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { Question } from '../../models/exercises.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input()
  public questions: Question[];
  @Output()
  public submitEmitter = new EventEmitter<any>();

  public optionSelected: boolean;
  public isSubmitted: boolean;
  private selectedAnswer: string;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    // hide icon indicater right or wrong by default
    document.querySelector('body').style.cssText = '--indicator-icon: none';
  }

  public onSelectOption(event: any, option: string, answer: string) {
    // if isSubmitted is true return/disbale onSelectOpion
    if (this.isSubmitted) {
      return;
    }

    this.optionSelected = true;
    const links = Array.from(document.querySelectorAll('.option-item'));
    links.forEach(ilink => {
      ilink.classList.remove('selected-option');
      ilink.classList.remove('option-selected-wrong');
    });
    event.target.classList.add('selected-option');
    this.selectedAnswer = option;

    if (option !== answer) {
      event.target.classList.add('option-selected-wrong');
    }
  }

  public onSubmitAnswer(correctAnswer: string) {

    // display icon indicater right or wrong
    document.querySelector('body').style.cssText = '--indicator-icon: block';

    // remove selected option class
    const links = Array.from(document.querySelectorAll('.option-item'));
    links.forEach(ilink => {
      ilink.classList.remove('selected-option');
    });

    // background to option container
    const optionContainer = this.elRef.nativeElement.querySelector('.option-container');
    if (this.selectedAnswer === correctAnswer) {
      optionContainer.classList = 'option-container option-container-correct';
    } else {
      optionContainer.classList = 'option-container option-container-wrong';
    }

    this.isSubmitted = true;
    this.submitEmitter.emit(this.isSubmitted);
  }

}
