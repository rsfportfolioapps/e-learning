export interface IDialog<T> {
  state?: 'submission' | 'confirmation' | 'edit' | 'add';
  title?: string;
  entity?: T;
  attr?: any;
}