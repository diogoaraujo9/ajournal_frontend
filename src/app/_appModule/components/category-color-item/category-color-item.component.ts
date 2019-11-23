import { Component, OnInit, Input } from "@angular/core";
import { CategoryColor } from '../category-colors/models/categoryColor';
import { NotifierService } from 'angular-notifier';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'category-color-item',
    templateUrl: 'category-color-item.component.html',
    styleUrls: ['category-color-item.component.scss']
})
export class CategoryColorItemComponent implements OnInit
{
    @Input() color: CategoryColor;
    @Input() isLoading: boolean;
    @Input() isOpen: boolean = true;
    public editando = false;
    public novaDescricao: string = "";
    public salvando: boolean = false;

    constructor(public notifierService: NotifierService,
        public _categoryService: CategoryService)
    {
        
    }

    ngOnInit() {
        
    }

    public startEditingCategory()
    {
        this.editando = true;
    }

    public editarDescricao()
    {
        this.editando = true;
        this.novaDescricao = this.color.descricao;
    }

    public salvarEdicao()
    {
        if (this.novaDescricao && this.novaDescricao != this.color.descricao)
        {
            this.color.descricao = this.novaDescricao;

            this.salvando = true;
            this._categoryService.criarCategoria(this.color).subscribe(resp => {
                this.salvando = false;
                this.editando = false;
                this.color._id = resp._id;
                this.notifierService.notify("success", "Categoria atualizada com sucesso");                    
            }, err => {
                this.salvando = false;
                this.editando = false;
                this.notifierService.notify("error", "Um erro ocorreu ao tentar atualziar categoria");            
            });
        }
        else
        {
            this.editando = false;
        }
        
        this.novaDescricao = "";        
    }

    public cancelarEdicao()
    {
        this.editando = false;
        this.novaDescricao = "";
    }
}