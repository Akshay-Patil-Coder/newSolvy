import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.css'
})
export class EmployeeLoginComponent {
  Employee:any
ngOnInit(){
this.Employee=localStorage.getItem("Employee")
this.Employee=JSON.parse(this.Employee)
if(this.Employee){
if(this.Employee.name == "employee"){

  this.router.navigateByUrl('/employee-myticket')

}
}
// console.log(this.Admin)
 }
masterServ = inject(MasterServicesService);

router=inject(Router);

email="";

password="";

 UserLogin(){
  let obj={email:this.email,password:this.password};
 this.masterServ.Userlogin(obj).subscribe((resp:any)=>{
if(resp.response){
  localStorage.setItem("Employee",JSON.stringify(resp));
  console.log(resp)
  this.router.navigateByUrl('/employee-myticket')
}
else{
  alert('something error');
  this.email="";
  this.password="";
}
 })

}
}
