import { IModel } from 'src/app/models/generic.model';

export interface Subject extends IModel {
  title?: string;
}

export interface Tutorial extends IModel {
  title?: string;
}