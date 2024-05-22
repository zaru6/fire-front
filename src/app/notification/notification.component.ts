import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NotificationsService } from '../notification.service';
import { Notification } from '../notification.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  trackByFn(index: number, item: Notification): number {
    return index;
  }
}
