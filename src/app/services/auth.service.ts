// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }

//   // Simulated login method
//   login(username: string, password: string): boolean {
//     if (username === 'admin' && password === 'password') {
//       localStorage.setItem('token', 'fake-jwt-token'); // Store token in localStorage
//       return true;
//     }
//     return false;
//   }

//   // Check if user is authenticated
//   isAuthenticated(): boolean {
//     return !!localStorage.getItem('token'); // Returns true if token exists
//   }

//   // Logout method
//   logout(): void {
//     localStorage.removeItem('token'); // Remove token
//   }
// }


// import { Injectable } from '@angular/core';
// import { Routes } from '@angular/router';
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
   
  
//   constructor(private router: Router) {}
//   login(username: string, password: string): boolean {
//     if (username === 'admin' && password === 'admin') {
//       if (typeof window !== 'undefined') {
//         localStorage.setItem('token', 'some-auth-token');
//       }
//       return true;
//     }
//     return false;
//   }

//   isAuthenticated(): boolean {
//     if (typeof window === 'undefined') {
//       return false; // Avoid errors in SSR or Node.js
//     }
//     return !!localStorage.getItem('token');
//   }

//   logout() {
//     if (typeof window !== 'undefined') {
//       localStorage.removeItem('token');
//       this.router.navigate(['login'])
//     }
//   }
// }


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}  // Inject Router

  // login(username: string, password: string): boolean {
  //   if (username === 'admin' && password === 'admin') {
  //     if (typeof window !== 'undefined') {
  //       localStorage.setItem('token', 'osfosffsjf');
  //     }
  //     this.router.navigate(['/admin/home']);
  //     return true;
  //   }
  //   return false;
  // }

   login(username: string, password: string): Observable<boolean> {
    // Replace this with actual authentication logic
    const isAuthenticated = username === 'admin' && password === '1234';
    return of(isAuthenticated); // ✅ Wrap in an Observable
  }

  isAuthenticated(): boolean {
    if (typeof window === 'undefined') {
      return false; // Avoid errors in SSR or Node.js
    }
    return !!localStorage.getItem('token');
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      this.router.navigate(['login']); // Navigate after logout
    }
  }
}
