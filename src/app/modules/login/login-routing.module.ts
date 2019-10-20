import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login.component";

const routes_paths: Routes = 
[
    { path: '', component: LoginComponent }
];

export const LoginRouting = RouterModule.forChild(routes_paths);