import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  date: BehaviorSubject<moment.Moment> = new BehaviorSubject<moment.Moment>(moment());
  constructor() { }
  stepMonth(step: number): void{
    const value = this.date.value.add(step, 'month');
    this.date.next(value);
  }
  changeDate(date: moment.Moment): void{
    const value = this.date.value.set({
      date: date.date(),
      month: date.month()
    });
    this.date.next(value);
  }
}
