import { Component, OnInit } from '@angular/core';
import { NotificationsService, Notification } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
    });
  }
}
