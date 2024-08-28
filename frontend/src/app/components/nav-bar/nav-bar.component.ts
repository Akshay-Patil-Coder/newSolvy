import { Component, inject } from '@angular/core';
import { DepartmentListComponent } from '../department-list/department-list.component';
import { ChildCategoryComponent } from '../child-category/child-category.component';
import { ParentCategoryComponent } from '../parent-category/parent-category.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { TicketListComponent } from '../TicketsComponent/ticket-list/ticket-list.component';
import { AllTicketsComponent } from '../TicketsComponent/all-tickets/all-tickets.component';
import { LoginPageComponent } from "../login-page/login-page.component";
import { EmployeeLoginComponent } from '../../EmployeeComponents/employee-login/employee-login.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  router=inject(Router)
logout(){
  localStorage.removeItem("Admin")
  this.router.navigateByUrl('login')

}
}
