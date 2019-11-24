import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DailyService } from '../../service/daily.service';
import { Registro } from '../../model/registro.model';
import { NotifierService } from 'angular-notifier';
import { CategoryColor } from 'src/app/_appModule/components/category-colors/models/categoryColor';

@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
    @Input() registro: Registro;    
    @Input() criandoNovo: boolean = false;
    @Input() editando: boolean = false;
    @Input() ultimoDia: boolean = false;
    @Output() completouNovoRegistro: EventEmitter<Registro> = new EventEmitter<Registro>();
    @Output() cancelouNovoRegistro: EventEmitter<any> = new EventEmitter<any>();
    
    public novaDescricao: string = "";
    public salvando: boolean = false;
    public colors: Array<CategoryColor> = [];
    public activeColor: string = "";
    public escolhendoCor: boolean = false;
    public oldActiveColor: string = "";
    
    constructor(public dailyService: DailyService,
        public notifierService: NotifierService)
    {
    }

    ngOnInit(): void {
        this.colors = [
            { cor: "#5BC0EB", descricao: "Category 1", index: 0 },
            { cor: "#FDE74C", descricao: "Category 2", index: 1 },
            { cor: "#9BC53D", descricao: "Category 3", index: 2 },
            { cor: "#E55934", descricao: "Category 4", index: 3 },
            { cor: "#FA7921", descricao: "Category 5", index: 4 },
            { cor: "#C14BFC", descricao: "Category 6", index: 5 },
            { cor: "#FC4BE4", descricao: "Category 7", index: 6 },
            { cor: "#4B51FC", descricao: "Category 8", index: 7 },
        ];

        this.activeColor = "#5BC0EB";

        if (this.registro)
        {
            const foundColor = this.colors.find(color => color.index == this.registro.categoriaIndex);

            if (foundColor)
            {
                this.activeColor = foundColor.cor;
            }
        }
    }  

    public alterarTarefaCompleta()
    {
        if (!this.editando)
        {
            this.registro.tarefaCompleta = !this.registro.tarefaCompleta;
            this.salvarRegistro();
        }
    }

    public editarDescricao()
    {
        this.editando = true;
        this.novaDescricao = this.registro.descricao;
        this.oldActiveColor = this.activeColor;
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
         
            this.salvarRegistro();
        }
        
        this.novaDescricao = "";        
    }

    public salvarRegistro()
    {
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

    public cancelarEdicao()
    {
        this.editando = false;
        this.novaDescricao = "";
        this.activeColor = this.oldActiveColor;

        if (this.criandoNovo)
        {
            this.cancelouNovoRegistro.next();
        }
    }

    public toogleColorList()
    {
        this.escolhendoCor = !this.escolhendoCor;
    }

    public openColorList()
    {
        this.escolhendoCor = true;
    }

    public closeColorList()
    {
        this.escolhendoCor = false;
    }

    public escolherCor(_color: CategoryColor)
    {
        this.registro.categoriaIndex = _color.index;
        this.activeColor = _color.cor;

        if (!this.criandoNovo && !this.editando)
        {
            this.salvarRegistro();
        }
    }
}