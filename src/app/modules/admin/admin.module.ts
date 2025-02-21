import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Router } from 'express';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminDashboardComponent,
    HomeComponent,
    RouterLink,
    FormsModule
 
  ],
  
})
export class AdminModule { 
  constructor() {
    console.log('AdminModule loaded.....');
  }
}
