import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Login } from '../model/login.model';
import { Router } from '@angular/router';

@Component({
    selector: 'journal-daily',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public user: Login = new Login();
    
    constructor(public loginService: LoginService, public router: Router)
    {
    }

    public doLogin()
    {
        event.preventDefault();

        if (!this.user || !this.user.usuario || !this.user.senha)
        {
            return;
        }

        this.loginService.doLogin(this.user).subscribe(x => {
            this.router.navigate(["daily"]);
        }, err => {
            console.error(err);
        });
    }
}
