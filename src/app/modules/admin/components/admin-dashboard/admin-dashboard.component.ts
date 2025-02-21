import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [AboutComponent, FooterComponent,HeaderComponent,RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
constructor() {
  console.log('AdminDashboardComponent');
}
}
