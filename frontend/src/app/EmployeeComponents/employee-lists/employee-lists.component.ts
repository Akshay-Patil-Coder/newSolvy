import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterServicesService } from '../../services/master-services.service';

@Component({
  selector: 'app-employee-lists',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-lists.component.html',
  styleUrl: './employee-lists.component.css'
})
export class EmployeeListsComponent {
  changable=true;
  department:any;
  category:any;
 
  services=inject(MasterServicesService)
  ngOnInit(): void {
    this.getParentCategory();
  }

  getParentCategory(){
  this.services.getParentCategory().subscribe({
    next:(item:any)=>{
      this.category=item;
      console.log(item);
    }
  })
  }
  
  obj:any={
    "department":"",
    "parentCategory":"",
    "childCategory":""
  }


  
  
 
}
