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
    
    constructor(public taskService: TaskService)
    {
    }

    ngOnInit(): void {
    }
}
