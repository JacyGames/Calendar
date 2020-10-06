import { Component, OnInit } from '@angular/core';
import {DataService} from '../common/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-calendar-task',
  templateUrl: './calendar-task.component.html',
  styleUrls: ['./calendar-task.component.scss']
})
export class CalendarTaskComponent implements OnInit {
  form: FormGroup;
  constructor(public dateService: DataService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
        task: new FormControl('', Validators.required)
    });
  }
  submit(): void{
    console.log(this.form);
  }
}
