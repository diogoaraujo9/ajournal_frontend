import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./components/register.component";

const routes_paths: Routes = 
[
    { path: '', component: RegisterComponent }
];

export const RegisterRouting = RouterModule.forChild(routes_paths);