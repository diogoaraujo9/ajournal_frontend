import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRouting } from './register-routing.module';
import { RegisterComponent } from './components/register.component';
import { RegisterService } from './service/register.service';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        RegisterRouting
    ],
    providers: [
        RegisterService
    ],
    bootstrap: []
})

export class RegisterModule { }