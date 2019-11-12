import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Register } from '../model/register.model';
import { Router } from '@angular/router';

@Component({
    selector: 'journal-daily',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    public newUser: Register = new Register();

    constructor(public registerService: RegisterService,
        public router: Router)
    {
    }

    public createRegister()
    {
        if (!this.newUser || !this.newUser.nome || !this.newUser.senha || !this.newUser.usuario)
        {
            return;
        }

        this.registerService.saveRegister(this.newUser).subscribe(x => {
            this.router.navigate(["login"]);
        }, err => {
            console.error(err);
        });
    }
}
