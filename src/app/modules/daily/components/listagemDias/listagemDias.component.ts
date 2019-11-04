import { Component, OnInit, OnDestroy } from '@angular/core';
import { DailyService } from '../../service/daily.service';
import * as moment from 'moment-timezone';
import { DiaDaSemana } from '../../model/diaDaSemana.model';
import { Registro } from '../../model/registro.model';
import { NotifierService } from 'angular-notifier';
import { Subscription } from 'rxjs';

@Component({
    selector: 'listagem-de-dias',
    templateUrl: './listagemDias.component.html',
    styleUrls: ['./listagemDias.component.scss']
})
export class ListagemDeDiasComponent implements OnInit, OnDestroy {
    public diasDaSemana: Array<DiaDaSemana> = [];
    public indexDaSemana: number = 0;
    public buscarWeeklyLogsSubscription: Subscription;
    
    constructor(public dailyService: DailyService,
        public notifierService: NotifierService)
    {
    }

    ngOnInit(): void {
        this.buscarWeeklyLogsSubscription = this.dailyService.buscarWeeklyLogs({data: moment().day(0).toDate()}).subscribe(resp => {
            this.preencheDiasDaSemana(resp || []);
        }, err => {
            console.error(err);
            this.notifierService.notify("error", "Um erro ocorreu ao tentar buscar registros");
        });
    }

    ngOnDestroy(): void {
        this.buscarWeeklyLogsSubscription.unsubscribe();
    }

    public preencheDiasDaSemana(_registros: Array<Registro>)
    {
        this.diasDaSemana = [];
        const listaDeDias = Array.from(Array(7).keys()); 
        let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        listaDeDias.forEach(dia => {
            const diaAtual = moment().tz(timezone).day(this.indexDaSemana + dia);

            let novoDiaDaSemana: DiaDaSemana = {
                ano: diaAtual.year(),
                dia: diaAtual.date(),
                mes: diaAtual.month(),
                data: diaAtual.toDate(),
                diaDaSemana: this.decideNomeDoDiaDaSemana(diaAtual.day()),
                registros: []
            }

            _registros.forEach(registro => {
                var format = 'YYYY/MM/DD HH:mm:ss ZZ';
                const dataConvertidaParaTimezoneAtual =  moment(registro.data, format).tz(timezone);

                if (novoDiaDaSemana.dia == dataConvertidaParaTimezoneAtual.date() && 
                    novoDiaDaSemana.mes == dataConvertidaParaTimezoneAtual.month() &&
                    novoDiaDaSemana.ano == dataConvertidaParaTimezoneAtual.year())
                {
                    novoDiaDaSemana.registros.push(registro);
                }
            });

            this.diasDaSemana.push(novoDiaDaSemana);
        });
    }

    public decideNomeDoDiaDaSemana(_dia: number)
    {
        switch(_dia)
        {
            case 0:
                return "Domingo";
            case 1:
                return "Segunda";
            case 2:
                return "Terça";
            case 3:
                return "Quarta";
            case 4:
                return "Quinta";
            case 5:
                return "Sexta";
            case 6:
                return "Sábado";
        }
    }
}