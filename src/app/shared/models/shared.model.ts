export interface MenuNode {
  title: string;
  value?: number;
  children?: MenuNode[];
}

export interface MenuFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

export enum Routes {
  home = 1,
  exercises = 2,
  reference = 3,
  simulation = 4,
  certificate = 5,
  feedback = 6
}