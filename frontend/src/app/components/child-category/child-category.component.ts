import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-category',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child-category.component.html',
  styleUrl: './child-category.component.css'
})
export class ChildCategoryComponent {
  changable=true;
  department:any;
  category:any;
 
  services=inject(MasterServicesService)
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
  parentCategory:any[]=[];

  getParentCategoryByName(){
    console.log('this is called')
    this.services.getParentCategoryById(this.obj.department).subscribe({
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
    
  createchildcategory(){
    this.services.createChildCategory(this.obj).subscribe({
      next:(item:any)=>{
        console.log(item);
        this.obj.department='';
        this.obj.parentCategory='';
        this.obj.childCategory='';
      this.getParentCategory();
      this.changable=true;
      },
      error: (err) => {
        console.error('Error fetching tickets:', err); 
      }
    })
  }
  deleteChildCategory(parentCategory:string,childCategory:string){
    let obj={
      parentCategory:parentCategory,
      childCategory:childCategory
    }
    console.log(obj);
    this.services.deleteChildCategory(obj).subscribe({
      next:(item:any)=>{
        this.getParentCategory();
        this.changable=true;
      }
    })
    }
  
}
