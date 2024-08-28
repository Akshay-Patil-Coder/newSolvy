import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EmployeeLoginComponent } from './EmployeeComponents/employee-login/employee-login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ChildCategoryComponent } from './components/child-category/child-category.component';
import { ParentCategoryComponent } from './components/parent-category/parent-category.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { TicketListComponent } from './components/TicketsComponent/ticket-list/ticket-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AllTicketsComponent } from './components/TicketsComponent/all-tickets/all-tickets.component';
import { authDepartGuard } from './auth-depart.guard';
import { EmployeeNavComponent } from './EmployeeComponents/employee-nav/employee-nav.component';
import { EmployeeAllListComponent } from './EmployeeComponents/employee-all-list/employee-all-list.component';
import { EmployeeAssignedToMeComponent } from './EmployeeComponents/employee-assigned-to-me/employee-assigned-to-me.component';
import { EmployeeCreatedByMeComponent } from './EmployeeComponents/employee-created-by-me/employee-created-by-me.component';
import { EmployeeCreateTicketComponent } from './EmployeeComponents/employee-create-ticket/employee-create-ticket.component';
import { EmployeeListsComponent } from './EmployeeComponents/employee-lists/employee-lists.component';
import { EmployeeMyticketsComponent } from './EmployeeComponents/employee-mytickets/employee-mytickets.component';
import { EmployeeProfileComponent } from './EmployeeComponents/employee-profile/employee-profile.component';
import { authEmployeeGuard } from './auth-employee.guard';
import { DepartmentUpdateComponent } from './components/department-update/department-update.component';
import { ParentCategoryUpdateComponent } from './components/parent-category-update/parent-category-update.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginPageComponent
    },
    {
        path:"Head",
        redirectTo:'login',
        pathMatch:"full"
    },
    {
        path:"employee-login",
        component:EmployeeLoginComponent
    },
    {
        path:'',
        redirectTo:"employee-login",
        pathMatch:"full"
    },
    {
        path:"client",
        component:EmployeeLoginComponent,
    },
    
    {
        path:'Head',
        component:NavBarComponent,
        canActivate:[authDepartGuard],
        children:[
            {
                path:'child-category',
                component:ChildCategoryComponent,
            },
            {
                path:"parent-category",
                component:ParentCategoryComponent
            },
            {
                path:"Tickets",
                component:AllTicketsComponent,
            },
            {
                path:"department",
                component:DepartmentListComponent
            },
            {
                 path:"employees",
                 component:EmployeeListComponent
            },
            {
                path:"update-department/:id",
                component:DepartmentUpdateComponent
           },
           {
            path:"update-parent-category/:id/:pname",
            component:ParentCategoryUpdateComponent
           },
           {
            path:"update-employees/:id",
            component:EmployeeUpdateComponent
           }
        
        ]
    },
    {
        path:'',
        component:EmployeeNavComponent,
        canActivate:[authEmployeeGuard],
        children:[
            {
                path:"employee-all-list",
                component:EmployeeAllListComponent
            },
            {
                path:"employee-assigned-list",
                component:EmployeeAssignedToMeComponent
            },
            {
                path:"employee-created-list",
                component:EmployeeCreatedByMeComponent
            },
            {
                path:"employee-create-ticket",
                component:EmployeeCreateTicketComponent
            },
            {
                path:"employee-myticket",
                component:EmployeeMyticketsComponent
            },
            {
                path:"employee-profile",
                component:EmployeeProfileComponent
            },
            {
                path:"employee-info",
                component:EmployeeListsComponent
            }

        ]

    },
    
];
