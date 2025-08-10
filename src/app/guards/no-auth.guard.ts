import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated) {
    // Si ya está autenticado, redirigir a la página principal
    router.navigate(['/folder/inbox']);
    return false;
  } else {
    // Si no está autenticado, permitir acceso al login
    return true;
  }
};
