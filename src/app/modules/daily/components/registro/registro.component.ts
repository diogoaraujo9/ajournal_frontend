import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Registro } from '../../model/registro.model';

@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
    @Input() registro: Registro;    
    @Input() criandoNovo: boolean = false;
    @Input() editando: boolean = false;
    @Output() completouNovoRegistro: EventEmitter<Registro> = new EventEmitter<Registro>();
    @Output() cancelouNovoRegistro: EventEmitter<any> = new EventEmitter<any>();
    public novaDescricao: string = "";
    
    constructor(public taskService: TaskService)
    {
    }

    ngOnInit(): void {
        
    }  

    public alterarTarefaCompleta()
    {
        if (!this.editando)
            this.registro.tarefaCompleta = !this.registro.tarefaCompleta;
    }

    public editarDescricao()
    {
        this.editando = true;
        this.novaDescricao = this.registro.descricao;
    }

    public salvarEdicao()
    {
        this.editando = false;

        if (this.novaDescricao)
            this.registro.descricao = this.novaDescricao;
        
        this.novaDescricao = "";

        if (this.criandoNovo)
        {
            this.completouNovoRegistro.next(this.registro);
        }
    }

    public cancelarEdicao()
    {
        this.editando = false;
        this.novaDescricao = "";

        if (this.criandoNovo)
        {
            this.cancelouNovoRegistro.next();
        }
    }
}