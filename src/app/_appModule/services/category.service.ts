import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CoreHttpService } from 'src/app/coreHttp.service';
import { HttpClient } from '@angular/common/http';
import { CategoryColor } from '../components/category-colors/models/categoryColor';

@Injectable()
export class CategoryService {
    private headers = new Headers();
    
    constructor(private http : HttpClient,
        public _coreHttpService: CoreHttpService) 
    {
        this.headers.set('Content-Type', 'application/json');
    }

    public criarCategoria(_categoria: CategoryColor): Observable<CategoryColor>
    {
        let options = new RequestOptions( { headers : this.headers });

        return this.http.post(`${this._coreHttpService.urlAPI}/api/createCategoria`, _categoria)
        .pipe(map(this.extractData))
        .pipe(catchError(this.handleError));
    }

    public buscarCategorias(): Observable<Array<CategoryColor>>
    {
        let options = new RequestOptions( { headers : this.headers });

        return this.http.get(`${this._coreHttpService.urlAPI}/api/getCategories`)
        .pipe(map(this.extractData))
        .pipe(catchError(this.handleError));
    }

    private extractData(res: any) {
        return res;
        
        let body = res && res.json();
        return body || {};
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error);
    }
}