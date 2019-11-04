import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class CoreHttpService {
    private headers = new Headers();
    
    constructor(private http : Http) 
    {
        this.headers.set('Content-Type', 'application/json');
    }

    public postMessage(): Observable<any>
    {
        let options = new RequestOptions( { headers : this.headers });

        return this.http.post(`http://localhost:8080/api/teste`, {}, options)
        .pipe(map(this.extractData))
        .pipe(catchError(this.handleError));
    }

    public get urlAPI()
    {
        return isDevMode() ? "http://localhost:1337" : "https://ajournal.azurewebsites.net";
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