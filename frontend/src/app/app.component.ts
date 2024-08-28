import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EmployeeNavComponent } from './EmployeeComponents/employee-nav/employee-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
