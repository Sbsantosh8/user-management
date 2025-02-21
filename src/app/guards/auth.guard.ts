// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {


//   return false;
// };


// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService) as AuthService; // Inject AuthService
//   const router = inject(Router); // Inject Router

//   if (authService.isAuthenticated()) {
//     return true; // Allow navigation
//   } else {
//     router.navigate(['/login']); // Redirect to login
//     return false;
//   }
// };


import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; // Allow navigation
  } else {
    router.navigate(['/login']); // Redirect to login
    return false;
  }
};
