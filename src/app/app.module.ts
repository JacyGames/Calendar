import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import { CalendarTaskComponent } from './components/calendar-task/calendar-task.component';
import {CalendarBodyComponent} from './components/calendar-body/calendar-body.component';
import {CalendarDateComponent} from './components/calendar-date/calendar-date.component';
import {DataService} from './components/common/data.service';
import { FormatPipe } from './components/common/format.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalendarDateComponent,
    CalendarBodyComponent,
    CalendarTaskComponent,
    FormatPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
