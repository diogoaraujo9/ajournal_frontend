import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'daily' },
    { path: 'daily', loadChildren: '../modules/daily/daily.module#DailyModule', data: { roles: [] } },
    { path: '**', pathMatch: 'full', redirectTo: 'daily' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
