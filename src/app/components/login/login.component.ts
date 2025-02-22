// // import { Component, OnInit } from '@angular/core';
// // import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
// // import { AuthService } from '../../services/auth.service';
// // import { Router } from '@angular/router';

// // @Component({
// //   selector: 'app-login',
// //   imports: [ReactiveFormsModule],
// //   templateUrl: './login.component.html',
// //   styleUrls: ["./login.component.css"]
// // })
// // export class LoginComponent implements OnInit {

// // loginForm = new FormGroup({
// //   username: new FormControl(''),
// //   password: new FormControl('')
// // })

// // constructor(private auth:AuthService,private router:Router){}
// // onSubmit():void{
// //   if (this.loginForm.valid){
// //     this.auth.login(this.loginForm.value).subscribe(
// //       (result)=>{this.router.navigate(['admin'])},(err:Error)=>{
// //         alert(err.message)
// //       }
// //     )
// //   }
// // }

// // ngOnInit() {
// //         }


  

// // }

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   imports: [ReactiveFormsModule],
//   templateUrl: './login.component.html',
//   styleUrls: ["./login.component.css"]
// })
// export class LoginComponent implements OnInit {

//   loginForm = new FormGroup({
//     username: new FormControl('', Validators.required),
//     password: new FormControl('', Validators.required)
//   });

//   constructor(private auth: AuthService, private router: Router) {}

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       const { username, password } = this.loginForm.value;
      
//       if (username && password) {
//         const isAuthenticated = this.auth.login(username, password);
        
//         if (isAuthenticated) {
//           this.router.navigate(['/admin']);  // Navigate to Admin page on success
//         } else {
//           alert('Invalid credentials');
//         }
//       } else {
//         alert('Please enter both username and password');
//       }
//     }
//   }

//   ngOnInit() {}
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router ,RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"],
  
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value || '';
      const password = this.loginForm.get('password')?.value || '';
      console.log(this.loginForm.value)
      this.auth.login(username, password).subscribe(
        (isAuthenticated: boolean) => {
          if (isAuthenticated) {
            this.router.navigate(['/admin']);
          } else {
            alert('Invalid credentials');
          }
        },
        (error: any) => alert('Authentication failed') // Explicit type for error
      );
    }
  }

  ngOnInit() {}
}
