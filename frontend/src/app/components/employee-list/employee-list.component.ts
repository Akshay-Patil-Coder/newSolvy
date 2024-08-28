import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
changable=true
services=inject(MasterServicesService)
router=inject(Router)
data:any;
department:any;
ngOnInit(): void {
  this.getUsers();
  this.getDepartment();
}

getUsers(){
  this.services.allUsers().subscribe({
    next: (item: any) => {
      this.data = item; 
      // this.data= JSON.parse(this.data);
      console.log(this.data); 

    },
    error: (err) => {
      console.error('Error fetching tickets:', err); // Handle errors
    }
  });
}
getDepartment(){
  this.services.getDepartment().subscribe({
    next: (item: any) => {
      this.department = item; 
      // this.data= JSON.parse(this.data);
      console.log(this.data); 
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
  
};

createUsers(){
  console.log(this.obj);
    this.services.createUsers(this.obj).subscribe({
      next: (item: any) => {
        this.getUsers();
        this.obj=""
        this.changable=true;
      },
      error: (err) => {
        console.error('Error fetching tickets:', err); // Handle errors
      }
    });
  

  }
  deleteUsers(_id:string){
    let obj={
      _id:_id
    }
    this.services.deleteUsers(obj).subscribe({
      next:(item:any)=>{
        this.getUsers();
      }
    })
  }
  updateEmployeeOnId(_id:string){
    console.log()
    this.router.navigateByUrl('Head/update-employees/'+_id);
  }
}
 
  

//
// // changestatus(_id:string,status:string){
//   let obj={
//     _id:_id,
//     status:status
//   };
//   console.log();
//   this.services.UpdateStatus(obj).subscribe((data:any)=>{
// console.log(data)
//   })
//   this.getTickets();
// }
// deleteTicket(_id:string){
//   let obj={
//     _id:_id,
//   };
// console.log(obj)
//   this.services.DeleteTickets(obj).subscribe((data:any)=>{
//     console.log(data)
//         })
//         this.getTickets();
// }




