import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Router } from 'express';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RouterLink } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminDashboardComponent,
    HomeComponent,
    RouterLink,
 
  ],
  
})
export class AdminModule { 
  constructor() {
    console.log('AdminModule loaded.....');
  }
}
