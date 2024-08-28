import { Component, Inject, inject } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-category',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './parent-category.component.html',
  styleUrl: './parent-category.component.css'
})
export class ParentCategoryComponent {
changable=true;
department:any;
category:any;
services=inject(MasterServicesService);
router=inject(Router);
ngOnInit(): void {
  this.getDepartment();
  this.getParentCategory();
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
createParentCategory(){
  this.services.createParentCategory(this.obj).subscribe({
    next:(item:any)=>{
      console.log(item);
      this.obj.department='';
      this.obj.parentCategory='';
      this.obj.childCategory='';
    this.getParentCategory();
    this.changable=true;
    },
    error: (err) => {
      console.error('Error fetching tickets:', err); // Handle errors
    }
  })
}
deleteParentCategory(_id:string){
  let obj={
    _id:_id
  }
  this.services.deleteParentCategory(obj).subscribe({
    next:(item:any)=>{
      this.getParentCategory();
      this.changable=true;
    }
  })
  }
  updateParentCategory(department:any,parentCategory:any){
    let obj={
      department:department,
      parentCategory:parentCategory
    }
    console.log()
    this.router.navigateByUrl('Head/update-parent-category/'+obj.department+'/'+obj.parentCategory);
  }
}
