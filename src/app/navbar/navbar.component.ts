import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  logout() {
    // Clear the authentication token
    localStorage.removeItem('token');

    // Navigate to the root route
    this.router.navigate(['/login']);
  }

}
