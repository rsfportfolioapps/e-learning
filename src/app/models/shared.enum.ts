export enum MenuText {
  home = 'Home',
  exercises = 'Exercises',
  referenceText = 'Reference Texts',
  simulation = 'Simulation',
  cerfiticate = 'Cerfiticate',
  feedback = 'Feedback',
  signout = 'Sign Out'
}

export interface MenuAttr {
  icon: string;
  route: string;
  text: string;
}