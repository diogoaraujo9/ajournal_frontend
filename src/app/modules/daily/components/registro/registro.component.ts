import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DailyService } from '../../service/daily.service';
import { Registro } from '../../model/registro.model';
import { NotifierService } from 'angular-notifier';

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
    public salvando: boolean = false;
    
    constructor(public dailyService: DailyService,
        public notifierService: NotifierService)
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

        if (this.novaDescricao && this.novaDescricao != this.registro.descricao)
        {
            this.registro.descricao = this.novaDescricao;
            
            if (this.criandoNovo)
                this.registro.tarefaCompleta = false;

            this.salvando = true;
            this.dailyService.criarRegistro(this.registro).subscribe(resp => {
                this.salvando = false;
                this.notifierService.notify("success", "Registro salvo com sucesso");                    
                
                this.criandoNovo && this.completouNovoRegistro.next(resp);
            }, err => {
                console.error(err);
                this.salvando = false;
                this.notifierService.notify("error", "Um erro ocorreu ao tentar salvar registro");
                
                this.criandoNovo && this.cancelouNovoRegistro.next();                    
            });
        }
        
        this.novaDescricao = "";        
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