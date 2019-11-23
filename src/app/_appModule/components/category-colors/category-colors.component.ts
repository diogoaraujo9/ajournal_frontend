import { Component, OnInit, Input } from "@angular/core";
import { CategoryColor } from './models/categoryColor';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'category-colors',
    templateUrl: 'category-colors.component.html',
    styleUrls: ['category-colors.component.scss']
})
export class CategoryColorsComponent implements OnInit
{
    @Input() isOpen: boolean = true;
    public colors: Array<CategoryColor> = [];
    public isLoading: boolean = true;

    constructor(public _categoryService: CategoryService)
    {
        
    }

    ngOnInit() {
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

        this._categoryService.buscarCategorias().subscribe(categories => {
            if (categories && categories.length)
            {
                categories.forEach(category => {
                    const foundColor = this.colors.find(color => color.index == category.index);

                    if (!foundColor)
                        return;

                    foundColor.descricao = category.descricao;
                    foundColor._id = category._id;
                });
            }

            this.isLoading = false;
        },
        err => {
            this.isLoading = false;
        });
    }
}