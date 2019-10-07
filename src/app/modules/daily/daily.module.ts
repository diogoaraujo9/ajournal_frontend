import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyRouting } from './daily-routing.module';
import { DailyComponent } from './components/daily.component';
import { TaskService } from './service/task.service';

@NgModule({
    declarations: [
        DailyComponent
    ],
    imports: [
        DailyRouting
    ],
    providers: [
        TaskService
    ],
    bootstrap: []
})

export class DailyModule { }