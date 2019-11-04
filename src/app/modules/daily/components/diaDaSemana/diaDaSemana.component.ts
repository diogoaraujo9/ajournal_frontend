import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/task.model';
import * as moment from 'moment';
import { Moment } from 'moment';
import { DiaDaSemana } from '../../model/diaDaSemana.model';
import { TipoDeRegistro } from '../../enum/tipoDeRegistro.enum';
import { Registro } from '../../model/registro.model';

@Component({
    selector: 'dia-da-semana',
    templateUrl: './diaDaSemana.component.html',
    styleUrls: ['./diaDaSemana.component.scss']
})
export class DiaDaSemanaComponent implements OnInit {
    @Input() dia: DiaDaSemana;
    public adicionandoRegistro: boolean = false;

    public editandoNovoRegistro: boolean = false;
    public novoRegistro: Registro;
    
    constructor(public taskService: TaskService)
    {
    }

    ngOnInit(): void {
    }

    public iniciarAdicionarRegistro()
    {
        this.adicionandoRegistro = true;
    }

    public iniciarEdicaoNovoRegistro(_tipoRegistro: TipoDeRegistro)
    {
        this.editandoNovoRegistro = true;
        this.adicionandoRegistro = false;
        this.novoRegistro = {
            diaDoRegistro: this.dia.data,
            tipo: _tipoRegistro,
            tarefaCompleta: false,
            descricao: ""
        };
    }

    public concluirNovoRegistro(_registro: Registro, _salvar: boolean)
    {
        this.editandoNovoRegistro = false;
        this.adicionandoRegistro = false;
        this.novoRegistro = null;

        if (_salvar)
        {
            _registro.tarefaCompleta = false;
            this.dia.registros.push(_registro);
        }
    }
}
