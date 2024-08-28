import { Component, inject } from '@angular/core';
import { EmployeeListsComponent } from '../employee-lists/employee-lists.component';
import { AllTicketsComponent } from '../../components/TicketsComponent/all-tickets/all-tickets.component';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';
import { EmployeeLoginComponent } from '../employee-login/employee-login.component';
import { EmployeeMyticketsComponent } from '../employee-mytickets/employee-mytickets.component';
import { EmployeeAllListComponent } from '../employee-all-list/employee-all-list.component';
import { EmployeeCreateTicketComponent } from '../employee-create-ticket/employee-create-ticket.component';
import {Router,RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './employee-nav.component.html',
  styleUrl: './employee-nav.component.css'
})
export class EmployeeNavComponent {
  router=inject(Router)
  logout(){
    localStorage.removeItem("Employee")
    this.router.navigateByUrl('employee-login')
  
  }
}
