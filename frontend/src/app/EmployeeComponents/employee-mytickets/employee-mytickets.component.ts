import { Component } from '@angular/core';
import { EmployeeCreatedByMeComponent } from '../employee-created-by-me/employee-created-by-me.component';
import { EmployeeAssignedToMeComponent } from '../employee-assigned-to-me/employee-assigned-to-me.component';

@Component({
  selector: 'app-employee-mytickets',
  standalone: true,
  imports: [EmployeeCreatedByMeComponent,EmployeeAssignedToMeComponent],
  templateUrl: './employee-mytickets.component.html',
  styleUrl: './employee-mytickets.component.css'
})
export class EmployeeMyticketsComponent {
  changable="Home"

}
