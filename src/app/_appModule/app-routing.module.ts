import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'daily', loadChildren: '../modules/daily/daily.module#DailyModule', data: { roles: [] } },
    { path: 'login', loadChildren: '../modules/login/login.module#LoginModule', data: { roles: [] } },    
    { path: 'register', loadChildren: '../modules/register/register.module#RegisterModule', data: { roles: [] } },    
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
