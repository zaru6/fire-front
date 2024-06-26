import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	@Input() pageTitle!: string;
	@Input() logoSrc!: string;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}