import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [],
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css'
})
export class EmployeeProfileComponent {
  data:any;
ngOnInit(){
this.data= localStorage.getItem('Employee');
this.data=JSON.parse(this.data)
console.log(this.data)
}
}
