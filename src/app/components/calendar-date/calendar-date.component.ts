import { Component, OnInit } from '@angular/core';
import {DataService} from '../common/data.service';

@Component({
  selector: 'app-calendar-date',
  templateUrl: './calendar-date.component.html',
  styleUrls: ['./calendar-date.component.scss']
})
export class CalendarDateComponent implements OnInit {

  constructor(public dateService: DataService) { }

  ngOnInit(): void {
  }

  changeDate(step: number): void{
    this.dateService.stepMonth(step);
  }
}
