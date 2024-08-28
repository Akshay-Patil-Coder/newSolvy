import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-all-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-all-list.component.html',
  styleUrl: './employee-all-list.component.css'
})
export class EmployeeAllListComponent {
  changable=true
  services=inject(MasterServicesService)
  data:any;
  department:any;
  ngOnInit(): void {
    this.getUsers();
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
 

}
