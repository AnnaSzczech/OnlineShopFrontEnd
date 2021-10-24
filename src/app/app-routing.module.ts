import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/account/login.component";
import { RegistrationComponent } from "./components/account/registration.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./service/auth.guard";

const routers: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}