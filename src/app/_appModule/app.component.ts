import { Component } from '@angular/core';
import { CoreHttpService } from '../coreHttp.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ajournal-portal';
    public isMenuOpen: boolean = true;

    constructor(public _loginService: LoginService)
    {
    }


    public toggleMenuPadding(_isMenuOpen: boolean)
	{
		this.isMenuOpen = _isMenuOpen;
	}
}
