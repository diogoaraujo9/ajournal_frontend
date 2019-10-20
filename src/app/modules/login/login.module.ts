import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouting } from './login-routing.module';
import { LoginComponent } from './components/login.component';
import { LoginService } from './service/login.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRouting
    ],
    providers: [
        LoginService
    ],
    bootstrap: []
})

export class LoginModule { }
