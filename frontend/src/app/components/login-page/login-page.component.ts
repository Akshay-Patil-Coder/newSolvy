import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
 Admin:any
  ngOnInit(){
this.Admin=localStorage.getItem("Admin")
this.Admin=JSON.parse(this.Admin)
if(this.Admin){
if(this.Admin.name == "admin"){

  this.router.navigateByUrl('Head/Tickets')

}
}
// console.log(this.Admin)
 }
masterServ = inject(MasterServicesService);

router=inject(Router);

email="";

password="";

 login(){
  let obj={email:this.email,password:this.password};
 this.masterServ.login(obj).subscribe((resp:any)=>{
if(resp.response){
  localStorage.setItem("Admin",JSON.stringify(resp));
  console.log(resp)
  this.router.navigateByUrl('Head/Tickets')
}
else{
  alert('something error');
  this.email="";
  this.password="";
}
 })

}
}
