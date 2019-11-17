import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyRouting } from './daily-routing.module';
import { ListagemDeDiasComponent } from './components/listagemDias/listagemDias.component';
import { DailyService } from './service/daily.service';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './components/registro/registro.component';
import { DiaDaSemanaComponent } from './components/diaDaSemana/diaDaSemana.component';

@NgModule({
    declarations: [
        ListagemDeDiasComponent,
        RegistroComponent,
        DiaDaSemanaComponent
    ],
    imports: [
        DailyRouting,
        CommonModule,
        FormsModule
    ],
    providers: [
    ],
    bootstrap: []
})

export class DailyModule { }