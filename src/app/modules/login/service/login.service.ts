import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Login } from '../model/login.model';
import { CoreHttpService } from 'src/app/coreHttp.service';

@Injectable()
export class LoginService {
    private headers = new Headers();
    
    constructor(private http : Http,
        public _coreHttpService: CoreHttpService) 
    {
        this.headers.set('Content-Type', 'application/json');
    }

    public doLogin(login: Login): Observable<any>
    {
        let options = new RequestOptions( { headers : this.headers });

        return this.http.post(`${this._coreHttpService.urlAPI}/api/authenticateUser`, login, options)
        .pipe(map(this.extractData))
        .pipe(catchError(this.handleError));
    }

    private extractData(res: Response) {
        let body = res && res.json();
        return body || {};
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error);
    }
}