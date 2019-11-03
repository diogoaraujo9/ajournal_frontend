import { Routes, RouterModule } from "@angular/router";
import { DailyComponent } from "./components/listagemDias/listagemDias.component";

const routes_paths: Routes = 
[
    { path: '', component: DailyComponent }
];

export const DailyRouting = RouterModule.forChild(routes_paths);