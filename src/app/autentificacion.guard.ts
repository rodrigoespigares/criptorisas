import { CanActivateFn, Router } from '@angular/router';
import { InicioSesionService } from './inicio-sesion.service';
import { inject } from '@angular/core';


export const autentificacionGuard: CanActivateFn = (route, state) => {
  let sesion = inject(InicioSesionService);
  let router = inject(Router);
  if ( sesion.usuario != ""){
    return true;
  }else{
    router.navigate(["index"]);
    return false;
  }
};
