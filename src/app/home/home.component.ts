import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  onSubmit(formData: any) {
    this.http.post('http://localhost:8080/login', formData).subscribe(
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
    this.http.post('http://localhost:8080/register', formData).subscribe(
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