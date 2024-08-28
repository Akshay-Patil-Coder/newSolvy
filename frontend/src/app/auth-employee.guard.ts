import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterServicesService } from './services/master-services.service';

export const authEmployeeGuard: CanActivateFn = () => {
  const services=inject(MasterServicesService);
  const router=inject(Router);
  if(services.UserisAuthenticated()){
 return true;
  }
  else{
   router.navigateByUrl('employee-login')
   return false;
  }
};
