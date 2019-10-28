import { Component } from '@angular/core';
import { CoreHttpService } from '../coreHttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ajournal-portal';
    public isMenuOpen: boolean = true;

    constructor(public httpTestService: CoreHttpService)
    {
    }

    public testemethod()
    {
        this.httpTestService.postMessage().subscribe(x =>
        {
        }, 
        err => {
        });
    }

    public toggleMenuPadding(_isMenuOpen: boolean)
	{
		this.isMenuOpen = _isMenuOpen;
	}
}
