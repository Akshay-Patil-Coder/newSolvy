import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterServicesService } from '../../services/master-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.css'
})
export class EmployeeUpdateComponent {
  constructor(private route: ActivatedRoute) { }

  services=inject(MasterServicesService)
  router=inject(Router)

  data:any;
  _id:any;
  department:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['id'];
      console.log(this._id)
    });
    this.getDepartment();
this.updateUserByInfo();
  
  }
  
 
  getDepartment(){
    this.services.getDepartment().subscribe({
      next: (item: any) => {
        this.department = item; 
        // this.data= JSON.parse(this.data);
        console.log(this.department); 
      },
      error: (err) => {
        console.error('Error fetching tickets:', err); // Handle errors
      }
    });
  }
   obj:any={
  "name":"",
  "email":"",
  "password":"",
  "confirmPassword":"",
  "mobileNo":"",
  "gender":"",
  "department":"",
  "_id":"",
    
  };

  NewData:any={
      "name":"",
      "email":"",
      "password":"",
      "confirmPassword":"",
      "mobileNo":"",
      "gender":"",
      "department":"",   
      "_id":""
  }

  updateUserByInfo(){
this.services.getUsersByidforUpdate(this._id).subscribe({
  next:(item:any)=>{
    this.obj=this.NewData;
this.NewData.name=item.name;
this.NewData.email=item.email;
this.NewData.password=item.password;
this.NewData.confirmPassword=item.confirmPassword;
this.NewData.mobileNo=item.mobileNo;
this.NewData.gender=item.gender;
this.NewData._id=this._id;
 }
})
 }
  
 JustUpdateParentCategory(){
  console.log(this.obj)
this.services.UpdateUserForUpdate(this.obj).subscribe({
  next:(item:any)=>{
    console.log(item);
  }
})
this.router.navigateByUrl('Head/employees')
} 
    
  
}
