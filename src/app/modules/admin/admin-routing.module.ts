import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [   { path: '', component: AdminDashboardComponent ,children:[
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'services',component:ServicesComponent},
{path:'',redirectTo:'/admin/home',pathMatch:'full'},


]},
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 
  constructor() {
    console.log('AdminRoutingModule loaded....');
  }
}
