import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseFirebase, Task} from './interfaces';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  static url = 'https://calendar-angular-2adcf.firebaseio.com/';
  constructor(public http: HttpClient) { }
  getTasks(date: moment.Moment): Observable<Task[]>{
    return this.http.get<Task[]>(`${TasksService.url}/${date.format('DD-MM-YYYY')}.json`).pipe(
      map((tasks) => {
        if (!tasks) {
          return [];
        }
        return Object.keys(tasks).map(key => ({...tasks[key], id: key}));
      })
    );
  }
  create(task: Task): Observable<Task>{
    return this.http.post<ResponseFirebase>(`${TasksService.url}/${task.date}.json`, task).pipe(
      map((response) => {
        return {...task, id: response.name};
      })
    );
  }
  deleteTask(task: Task): Observable<void>{
    return this.http.delete<void>(`${TasksService.url}/${task.date}/${task.id}.json`);
  }
}
