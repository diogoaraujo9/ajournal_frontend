import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Register } from '../model/register.model';

@Component({
    selector: 'journal-daily',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    constructor(public registerService: RegisterService)
    {
    }

    public createRegister()
    {
        debugger;
        let registerExample: Register = {
            nome: "TESTE",
            usuario: "teste",
            senha: "teste123"
        };

        this.registerService.saveRegister(registerExample).subscribe(x => {
            debugger;
        }, err => {
            debugger;
        });
    }
}
