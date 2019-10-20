import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Login } from '../model/login.model';

@Component({
    selector: 'journal-daily',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(public loginService: LoginService)
    {
    }

    public doLogin()
    {
        debugger;
        let loginExample: Login = {
            usuario: "TESTE",
            senha: "senha123"
        };

        this.loginService.doLogin(loginExample).subscribe(x => {
            debugger;
        }, err => {
            debugger;
        });
    }
}
