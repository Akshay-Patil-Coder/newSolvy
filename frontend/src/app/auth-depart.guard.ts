import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterServicesService } from './services/master-services.service';

export const authDepartGuard: CanActivateFn = () => {

 const services=inject(MasterServicesService);
 const router=inject(Router);
 if(services.isAuthenticated()){
return true;
 }
 else{
  router.navigateByUrl('login')
  return false;
 }
};
