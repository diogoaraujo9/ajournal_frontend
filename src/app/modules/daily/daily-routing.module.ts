import { Routes, RouterModule } from "@angular/router";
import { ListagemDeDiasComponent } from "./components/listagemDias/listagemDias.component";

const routes_paths: Routes = 
[
    { path: '', component: ListagemDeDiasComponent }
];

export const DailyRouting = RouterModule.forChild(routes_paths);