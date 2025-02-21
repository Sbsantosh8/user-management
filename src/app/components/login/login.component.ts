import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {faLock} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


constructor() { }
ngOnInit(): void {

}
}
