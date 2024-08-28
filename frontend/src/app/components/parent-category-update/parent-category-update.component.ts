import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterServicesService } from '../../services/master-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent-category-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './parent-category-update.component.html',
  styleUrl: './parent-category-update.component.css'
})
export class ParentCategoryUpdateComponent {
  constructor(private route: ActivatedRoute) { }
  services=inject(MasterServicesService);
  router=inject(Router);
  data:any={
    "parentCategory":"",
    "department":"",
  };
  Deport:any;
  department:any;
  parentCategory:any;
  ngOnInit(): void {
    // Retrieve route parameters
    this.route.params.subscribe(params => {
      this.department = params['id'];
      this.parentCategory = params['pname'];
      console.log(this.parentCategory,this.department)

      this.ParentCategoriesForUpdate();
      this.getDepartment();
    });
  }

ParentCategoriesForUpdate(){
  this.services.ParentCategoriesForUpdate(this.parentCategory).subscribe({
    next:(item:any)=>{
   this.data.parentCategory=item.parentCategory;
   console.log(this.data.parentCategory)
    }
  })
}
getDepartment(){
  this.services.getDepartment().subscribe({
    next: (item: any) => {
      this.Deport = item; 
      console.log(this.Deport); 
    },
    error: (err) => {
      console.error('Error fetching tickets:', err); // Handle errors
    }
  });
  
}
newValueofparentCategory:any;
newValueofdepartment:any;

JustUpdateParentCategory(){
  let obj={
    department:this.newValueofdepartment,
    parentCategory:this.newValueofparentCategory,
    oldParentCategory:this.parentCategory
  }
  console.log(obj);
this.services.NowUpdateParentCategory(obj).subscribe({
  next:(item:any)=>{
    console.log(item);
  }
})
this.router.navigateByUrl('Head/parent-category');
}
}
