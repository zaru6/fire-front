import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout()
    .subscribe(response => {
       console.log('Logout successful. ', response);
       this.router.navigate(['/login']);
      }, error => {
      console.log('Logout failed. ', error);
      this.router.navigate(['/login']);
     });
    ;
  }

}
