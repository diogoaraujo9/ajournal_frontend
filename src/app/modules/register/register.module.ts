import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRouting } from './register-routing.module';
import { RegisterComponent } from './components/register.component';
import { RegisterService } from './service/register.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        RegisterRouting,
        CommonModule,
        RouterModule,
        FormsModule
    ],
    providers: [
        RegisterService
    ],
    bootstrap: []
})

export class RegisterModule { }