import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyRouting } from './daily-routing.module';
import { DailyComponent } from './components/listagemDias/listagemDias.component';
import { TaskService } from './service/task.service';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
    declarations: [
        DailyComponent,
        RegistroComponent 
    ],
    imports: [
        DailyRouting,
        CommonModule,
        FormsModule
    ],
    providers: [
        TaskService
    ],
    bootstrap: []
})

export class DailyModule { }