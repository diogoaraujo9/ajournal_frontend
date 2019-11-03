import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import * as moment from 'moment';
import { Moment } from 'moment';
import { DiaDaSemana } from '../../model/diaDaSemana.model';
import { TipoDeRegistro } from '../../enum/tipoDeRegistro.enum';

@Component({
    selector: 'listagem-de-dias',
    templateUrl: './listagemDias.component.html',
    styleUrls: ['./listagemDias.component.scss']
})
export class ListagemDeDiasComponent implements OnInit {
    public currentDate: Moment;
    public diasDaSemana: Array<DiaDaSemana> = [];
    public indexDaSemana: number = 0;
    
    constructor(public taskService: TaskService)
    {
    }

    ngOnInit(): void {
        this.currentDate = moment();        
        this.preencheDiasDaSemana();
    }

    public preencheDiasDaSemana()
    {
        this.diasDaSemana = [];
        const listaDeDias = Array.from(Array(7).keys()); 
        
        listaDeDias.forEach(dia => {
            const diaAtual = moment().day(this.indexDaSemana + dia);
            this.diasDaSemana.push({
                ano: diaAtual.year(),
                dia: diaAtual.date(),
                mes: diaAtual.month(),
                diaDaSemana: this.decideNomeDoDiaDaSemana(diaAtual.day()),
                registros: [
                    { 
                        diaDoRegistro: null,
                        tipo: TipoDeRegistro.Tarefa,
                        descricao: "Comprar chumbinho no Joanin",
                        tarefaCompleta: true,
                        editando: false
                    },
                    { 
                        diaDoRegistro: null,
                        tipo: TipoDeRegistro.Tarefa,
                        descricao: "Matar o cachorro da vizinha",
                        tarefaCompleta: false,
                        editando: false
                    },
                    { 
                        diaDoRegistro: null,
                        tipo: TipoDeRegistro.Evento,
                        descricao: "Baladinha indie na augusta",
                        tarefaCompleta: false,
                        editando: false
                    },
                    { 
                        diaDoRegistro: null,
                        tipo: TipoDeRegistro.Nota,
                        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec scelerisque quam, sed imperdiet justo. Vestibulum nec vulputate sapien. Aliquam ac vulputate nulla. Integer a magna efficitur, dictum nisl at, posuere ligula. Integer tortor nisl, aliquam vel turpis a, egestas semper justo. Integer at nunc et ante semper sollicitudin. Sed ut felis eu eros facilisis elementum. Suspendisse diam neque, ullamcorper vitae nisl at, lobortis posuere mauris. Donec interdum quam ac eros mattis sagittis. Morbi eu massa consectetur purus porta pharetra.",
                        tarefaCompleta: false,
                        editando: false
                    }
                ]
            });
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