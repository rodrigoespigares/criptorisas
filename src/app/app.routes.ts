import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StartNowComponent } from './start-now/start-now.component';
import { DetalleComponent } from './detalle/detalle.component';
import { autentificacionGuard } from './autentificacion.guard';
import { LoginComponent } from './login/login.component';
import { PersonalComponent } from './personal/personal.component';


export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'start-now', component:StartNowComponent},
    {path:'detalle/:id', component:DetalleComponent},
    {path:'cartera', component:PersonalComponent, canActivate:[autentificacionGuard]},
    {path:'index',redirectTo:"", pathMatch:"full"},
    {path:'', component:LandingComponent },
    
];
