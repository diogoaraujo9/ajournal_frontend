import { Component } from '@angular/core';
import { HttpTestService } from '../httpTeste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ajournal-portal';
    public isMenuOpen: boolean = true;

    constructor(public httpTestService: HttpTestService)
    {
    }

    public testemethod()
    {
        debugger;
        this.httpTestService.postMessage().subscribe(x =>
        {
            debugger;
        }, 
        err => {
            debugger;
        });
    }

    public toggleMenuPadding(_isMenuOpen: boolean)
	{
		this.isMenuOpen = _isMenuOpen;
	}
}
