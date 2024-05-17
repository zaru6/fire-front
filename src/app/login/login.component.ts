import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  newUsername = '';
  newPassword = '';
  newFullName = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(formData: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { email: formData.username, password: formData.password };

    this.http.post<{ token: string }>('http://localhost:8080/auth/login', body, { headers }).subscribe(
      (response) => {
        // Handle successful login
        console.log(response);
        // Store the token in localStorage
        localStorage.setItem('token', response.token);
        // Navigate to the products route
        this.router.navigate(['/products']);
      },
      (error) => {
        // Handle error during login
        console.error(error);
      }
    );
  }

  onRegister(formData: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { email: formData.newUsername, fullName: formData.newFullName, password: formData.newPassword };

    this.http.post('http://localhost:8080/auth/signup', body, { headers }).subscribe(
      (response) => {
        // Handle successful registration
        console.log(response);
      },
      (error) => {
        // Handle error during registration
        console.error(error);
      }
    );
  }

  logout() {
    // Clear the authentication token
    localStorage.removeItem('token');

    // Navigate to the root route
    this.router.navigate(['/']);
  }
}