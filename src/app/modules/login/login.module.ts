import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouting } from './login-routing.module';
import { LoginComponent } from './components/login.component';
import { LoginService } from './service/login.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRouting,
        CommonModule,
        RouterModule,
        FormsModule
    ],
    providers: [
    ],
    bootstrap: []
})

export class LoginModule { }
