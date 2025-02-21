import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'admin',canActivate:[authGuard],loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'**',component:NotFoundComponent},

];
