import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';
@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
