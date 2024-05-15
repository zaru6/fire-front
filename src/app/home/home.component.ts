import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username = '';
  password = '';
  newUsername = '';
  newPassword = '';
  newFullName = '';

  constructor(private http: HttpClient) {}

  onSubmit(formData: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { username: formData.username, password: formData.password };

    this.http.post('http://localhost:8080/auth/login', body, { headers }).subscribe(
      (response) => {
        // Handle successful login
        console.log(response);
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
}