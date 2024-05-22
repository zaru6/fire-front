import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from '../notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient, private notificationsService: NotificationsService) {}

  showSuccess() {
    this.notificationsService.add({ message: 'This is a success message!', type: 'success' });
  }

  showError() {
    this.notificationsService.add({ message: 'This is an error message!', type: 'error' });
  }

  showInfo() {
    this.notificationsService.add({ message: 'This is an info message!', type: 'info' });
  }

  showWarning() {
    this.notificationsService.add({ message: 'This is a warning message!', type: 'warning' });
  }

}