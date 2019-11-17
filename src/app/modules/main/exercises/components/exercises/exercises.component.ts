import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  public isSubmitted: boolean;

  constructor() { }

  ngOnInit() {
  }

  public handleSubmit(isSubmitted: boolean) {
    this.isSubmitted = isSubmitted;
  }

}
