import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterServicesService } from '../../services/master-services.service';

@Component({
  selector: 'app-department-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './department-update.component.html',
  styleUrl: './department-update.component.css'
})
export class DepartmentUpdateComponent {
  constructor(private route: ActivatedRoute) { }
  services=inject(MasterServicesService);
  router=inject(Router);
  data:any={
    "name":"",
  };
  _id:any;
  ngOnInit(): void {
    // Retrieve route parameters
    this.route.params.subscribe(params => {
      this._id = params['id'];
      console.log(this._id)
      this.updatedepartment();
    });
  }
  updatedepartment(){
this.services.getDepartmentsForUpdate(this._id).subscribe({
  next:(item:any)=>{
    this.data.name=item.name
  }
})
  }
newValue:any;

JustUpdateDepartment(){
  let obj={
    _id:this._id,
    name:this.newValue
  }
this.services.DepartmentsForUpdate(obj).subscribe({
  next:(item:any)=>{
    console.log(item);
  }
})
this.router.navigateByUrl('Head/department');
}
}
