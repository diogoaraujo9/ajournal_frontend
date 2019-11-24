// Angular Modules
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
// import { MenuRoutesEnum } from 'src/app/domain/enum/menuRoutesEnum';
// import { VerticalMenuRoute } from 'src/app/domain/verticalMenuRoute';
// import { ProductsEnum } from 'src/app/domain/enum/productsEnum';

@Component({
  selector: 'lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss']
})
export class LateralMenuComponent
{
    public isMenuOpen: boolean = true;
    @Output() onClickToggleButton = new EventEmitter<boolean>();

    constructor(public _loginService: LoginService,
        public _router: Router) { }

    public toggleMenu()
    {
        this.isMenuOpen = !this.isMenuOpen;
        this.onClickToggleButton.emit(this.isMenuOpen);
    }

    public logout()
    {
        this._loginService.logout();
        this._router.navigate(['login']);
    }
}