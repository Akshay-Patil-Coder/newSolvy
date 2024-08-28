import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-create-ticket',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-create-ticket.component.html',
  styleUrl: './employee-create-ticket.component.css'
})
export class EmployeeCreateTicketComponent {
  services=inject(MasterServicesService);
  router=inject(Router);
  data:any;
  department:any;
  users:any;
  NewChildCategories:any;
  ngOnInit(){
    this.data = localStorage.getItem('Employee');
    this.data=JSON.parse(this.data);
    this.getDepartment();
    this.getAllusers();
  }
obj:any={
  "createdBy":"",
  "Department":"",
  "ParentCategory":"",
  "ChildCategory":"",
  "Description":"",
  "AssignedTo":""
};
newObj:any={
  "Department":"",
};
creteTickets(){

  this.obj.createdBy=this.data._id;
  this.obj.Department=this.newObj.Department;
  console.log(this.obj)
  this.services.CreateTicket(this.obj).subscribe({
    next:(item:any)=>{
console.log(item)
this.obj.createdBy='';
this.obj.Department='';
this.obj.ParentCategory='';
this.obj.ChildCategory='';
this.obj.Description='';
this.obj.AssignedTo='';
    }
  })
}

getDepartment(){
  this.services.getDepartment().subscribe({
    next: (item: any) => {
      this.department = item; 
    },
    error: (err) => {
      console.error('Error fetching tickets:', err); // Handle errors
    }
  });
  
}
parentCategory:any[]=[];
getParentCategoryByName(){
  console.log('this is called')
  this.services.getParentCategoryById(this.obj.Department).subscribe({
    next:(item:any)=>{
      // console.log("this is new",item)
      this.parentCategory=item;
      console.log('this is new',this.parentCategory);
    },
    error:(err)=>{
      alert("not parent categoriies found");
    }
  })
  }
  getAllusers(){
    this.services.allUsers().subscribe({
      next:(item:any)=>{
        this.users=item;
      }
    })
  }
ChildCategories:any[]=[];

  getChildCategoryByName(){
    console.log(this.obj)
    this.services.getChildCategoryById(this.obj.ParentCategory).subscribe({
      next:(item:any)=>{
        this.ChildCategories=item;
        this.NewChildCategories=this.ChildCategories[0].childCategory;
        console.log('this is child categories',this.ChildCategories[0].childCategory);
      },
      error:(err)=>{
        alert("not parent categoriies found");
      }
    })
  }
}
