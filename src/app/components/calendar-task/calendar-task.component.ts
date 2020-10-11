import { Component, OnInit } from '@angular/core';
import {DataService} from '../common/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TasksService} from '../common/tasks.service';
import {Task} from '../common/interfaces';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-calendar-task',
  templateUrl: './calendar-task.component.html',
  styleUrls: ['./calendar-task.component.scss']
})
export class CalendarTaskComponent implements OnInit {
  form: FormGroup;
  tasks: Task[] = [];
  constructor(public dateService: DataService, public taskService: TasksService) { }

  ngOnInit(): void {
    this.dateService.date.pipe(
      switchMap(value => this.taskService.getTasks(value))
    ).subscribe(tasks => {
      this.tasks = tasks;
    });
    this.form = new FormGroup({
        task: new FormControl('', Validators.required)
    });
  }
  submit(): void{
    const {task} = this.form.value;
    const taskForFireSet: Task = {
      task,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    };
    this.taskService.create(taskForFireSet).subscribe(task => {
      this.tasks.push(task);
      this.form.reset();
    }, error => console.error(error));
  }
   remove(task: Task): void{
      this.taskService.deleteTask(task).subscribe(() => {
       this.tasks = this.tasks.filter(taskHome => taskHome.id !== task.id);
      }, error => console.error(error));
   }
}
