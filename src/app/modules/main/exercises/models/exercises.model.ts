import { IModel } from 'src/app/models/generic.model';

export interface Exercises extends IModel { }

export interface ExerciseHtmlContent extends IModel {
  content: string;
}

export interface Question extends IModel {
  title: string;
  options: Option[];
  description?: string;
  subDescription?: string;
}

export interface Option extends IModel {
  value?: string;
}