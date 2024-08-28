import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
changable=true
services=inject(MasterServicesService)
router=inject(Router)
department:any;
ngOnInit(): void {
  this.getDepartment();
}
getDepartment(){
  this.services.getDepartment().subscribe({
    next: (item: any) => {
      this.department = item; 
      console.log(this.department); 
    },
    error: (err) => {
      console.error('Error fetching tickets:', err); // Handle errors
    }
  });
  
}

obj:any={
"name":"",
};
createDepartment(){
this.services.createDepartment(this.obj).subscribe({
  next:(item:any)=>{
    this.getDepartment();
    this.obj.name=""
    this.changable=true;
  }
})
}
deleteDepartment(_id:string){
  let obj={
    _id:_id
  }
  this.services.deleteDepartment(obj).subscribe({
    next:(item:any)=>{
      this.getDepartment();
      this.changable=true;
    }
  })
  }

  updateDepartement(_id:any){
    this.router.navigateByUrl('Head/update-department/'+_id);
  }
}
