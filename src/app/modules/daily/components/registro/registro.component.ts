import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Registro } from '../../model/registro.model';

@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
    @Input() registro: Registro;
    
    constructor(public taskService: TaskService)
    {
    }

    ngOnInit(): void {
        
    }  

    public alterarTarefaCompleta(_registro: Registro)
    {
        _registro.tarefaCompleta = !_registro.tarefaCompleta;
    }

    public editarDescricao(_registro: Registro)
    {
        _registro.editando = true;
        _registro.novaDescricao = _registro.descricao;
    }

    public salvarEdicao(_registro: Registro)
    {
        _registro.editando = false;

        if (_registro.novaDescricao)
            _registro.descricao = _registro.novaDescricao;
        
        _registro.novaDescricao = "";
    }

    public cancelarEdicao(_registro: Registro)
    {
        _registro.editando = false;
        _registro.novaDescricao = "";
    }
}
