import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Login } from '../../modules/login/model/login.model';
import { CoreHttpService } from 'src/app/coreHttp.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    private headers = new Headers();
    public changedLoggedInSubject = new Subject<boolean>();
    
    constructor(private http : HttpClient,
        public _coreHttpService: CoreHttpService) 
    {
        this.headers.set('Content-Type', 'application/json');
    }

    public doLogin(login: Login): Observable<any>
    {
        let options = new RequestOptions( { headers : this.headers });

        return this.http.post<{token: string, userId: string}>(`${this._coreHttpService.urlAPI}/api/authenticateUser`, login)
        .pipe(map(resp => {
            localStorage.setItem('access_token', resp.token);
            this.changedLoggedInSubject.next(true);

            return resp;
        }))
        .pipe(catchError(this.handleError));
    }

    logout() {
        localStorage.removeItem('access_token');

        this.changedLoggedInSubject.next(false);
    }
    
    public get loggedIn(): boolean {
        return (localStorage.getItem('access_token') !== null);
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