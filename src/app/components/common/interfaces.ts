import * as moment from 'moment';

export interface Day {
  value: moment.Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
}
export interface Week {
  days: Array<Day>;
}
export interface Task {
  date?: string;
  task: string;
  id?: string;
}
export interface ResponseFirebase {
  name: string;
}
