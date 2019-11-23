// Angular Modules
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LoginService } from '../../services/login.service';
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

    constructor(public _loginService: LoginService) { }

    public toggleMenu()
    {
        this.isMenuOpen = !this.isMenuOpen;
        this.onClickToggleButton.emit(this.isMenuOpen);
    }
}