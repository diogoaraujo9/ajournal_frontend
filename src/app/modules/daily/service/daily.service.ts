import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Task } from '../model/task.model';
import { CoreHttpService } from 'src/app/coreHttp.service';
import { Registro } from '../model/registro.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DailyService {
    private headers = new Headers();
    
    constructor(private http : HttpClient,
        public _coreHttpService: CoreHttpService) 
    {
        this.headers.set('Content-Type', 'application/json');
    }

    public criarRegistro(_registro: Registro): Observable<any>
    {
        let options = new RequestOptions( { headers : this.headers });

        return this.http.post(`${this._coreHttpService.urlAPI}/api/createDailyLog`, _registro)
        .pipe(map(this.extractData))
        .pipe(catchError(this.handleError));
    }

    public buscarWeeklyLogs(_data: {data: Date}): Observable<any>
    {
        let options = new RequestOptions( { headers : this.headers });

        return this.http.post(`${this._coreHttpService.urlAPI}/api/getDailyWeek`, _data)
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