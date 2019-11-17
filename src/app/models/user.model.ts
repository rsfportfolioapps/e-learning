import { IModel } from './generic.model';

export interface User extends IModel { 
  exists?: boolean;
}

