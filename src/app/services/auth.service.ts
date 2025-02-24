// // // import { Injectable } from '@angular/core';

// // // @Injectable({
// // //   providedIn: 'root'
// // // })
// // // export class AuthService {

// // //   constructor() { }

// // //   // Simulated login method
// // //   login(username: string, password: string): boolean {
// // //     if (username === 'admin' && password === 'password') {
// // //       localStorage.setItem('token', 'fake-jwt-token'); // Store token in localStorage
// // //       return true;
// // //     }
// // //     return false;
// // //   }

// // //   // Check if user is authenticated
// // //   isAuthenticated(): boolean {
// // //     return !!localStorage.getItem('token'); // Returns true if token exists
// // //   }

// // //   // Logout method
// // //   logout(): void {
// // //     localStorage.removeItem('token'); // Remove token
// // //   }
// // // }


// // // import { Injectable } from '@angular/core';
// // // import { Routes } from '@angular/router';
// // // @Injectable({
// // //   providedIn: 'root',
// // // })
// // // export class AuthService {
   
  
// // //   constructor(private router: Router) {}
// // //   login(username: string, password: string): boolean {
// // //     if (username === 'admin' && password === 'admin') {
// // //       if (typeof window !== 'undefined') {
// // //         localStorage.setItem('token', 'some-auth-token');
// // //       }
// // //       return true;
// // //     }
// // //     return false;
// // //   }

// // //   isAuthenticated(): boolean {
// // //     if (typeof window === 'undefined') {
// // //       return false; // Avoid errors in SSR or Node.js
// // //     }
// // //     return !!localStorage.getItem('token');
// // //   }

// // //   logout() {
// // //     if (typeof window !== 'undefined') {
// // //       localStorage.removeItem('token');
// // //       this.router.navigate(['login'])
// // //     }
// // //   }
// // // }


// // import { Injectable } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { Observable, of } from 'rxjs';


// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class AuthService {
// //   constructor(private router: Router) {}  // Inject Router

// //   // login(username: string, password: string): boolean {
// //   //   if (username === 'admin' && password === 'admin') {
// //   //     if (typeof window !== 'undefined') {
// //   //       localStorage.setItem('token', 'osfosffsjf');
// //   //     }
// //   //     this.router.navigate(['/admin/home']);
// //   //     return true;
// //   //   }
// //   //   return false;
// //   // }

// //    login(username: string, password: string): Observable<boolean> {
// //     // Replace this with actual authentication logic
// //     const isAuthenticated = username === 'admin' && password === '1234';
// //     return of(isAuthenticated); // ✅ Wrap in an Observable
// //   }

// //   isAuthenticated(): boolean {
// //     if (typeof window === 'undefined') {
// //       return true; // Avoid errors in SSR or Node.js
// //     }
// //     return !!localStorage.getItem('token');
// //   }

// //   logout() {
// //     if (typeof window !== 'undefined') {
// //       localStorage.removeItem('token');
// //       this.router.navigate(['login']); // Navigate after logout
// //     }
// //   }
// // }




// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   constructor(private router: Router) {}

//   login(username: string, password: string): Observable<boolean> {
//     // Simulate authentication (Replace this with API call)
//     if (username === 'admin' && password === '1234') {
//       localStorage.setItem('token', 'your-generated-token'); // Store token
//       return of(true);
//     }
//     return of(false);
//   }

//   isAuthenticated(): boolean {
//     if (typeof window === 'undefined') {
//       return false; // Ensure it works in SSR or Node.js
//     }
//     return !!localStorage.getItem('token'); // Check if token exists
//   }

//   logout() {
//     if (typeof window !== 'undefined') {
//       localStorage.removeItem('token');
//       this.router.navigate(['/login']); // Redirect after logout
//     }
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap ,map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/auth/login/'; // Django API URL

  constructor(private http: HttpClient, private router: Router) {}
  login(username: string, password: string): Observable<boolean> {
    console.log(username, password, "inside login of auth service.ts");
    
    return this.http.post<{ key: string }>(this.apiUrl, { username, password }).pipe(
      tap(response => {
        
        console.log("Response from API:", response); // ✅ Log full response
        if (response.key) {
          localStorage.setItem('token', response.key); // Store token
        }
      }),
      map(response => !!response.key) // Return true if token exists
    );
  }
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Check if token exists
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}



