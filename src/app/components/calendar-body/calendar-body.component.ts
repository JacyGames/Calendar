import { Component, OnInit } from '@angular/core';
import {Day, Week} from '../common/interfaces';
import {DataService} from '../common/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-body',
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.scss']
})
export class CalendarBodyComponent implements OnInit {
  public Month: Array<Week>;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.date.subscribe(this.generate.bind(this));
  }

  generate(now: moment.Moment): void{
    const startDay = now.clone().startOf('month').startOf('week');
    const endDay = now.clone().endOf('month').endOf('week');
    const date = startDay.clone().subtract(1, 'day');
    const calendar = [];
    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7).fill(0)
          .map(() => {
            const value = date.add(1, 'day').clone();
            const active = moment().isSame(value, 'date');
            const disabled = !now.isSame(value, 'month');
            const selected = now.isSame(value, 'date');
            return {
              value, active, disabled, selected
            };
          })
      });
    }
    this.Month = calendar;
  }
  select(day: Day): void{
    this.dataService.changeDate(day.value);
  }

}
