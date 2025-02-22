import { Component} from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { HeaderComponent } from "./modules/admin/components/header/header.component";
import { FooterComponent } from "./modules/admin/components/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, RouterLink, HeaderComponent, FooterComponent,ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management';
}
