import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notification } from './notification.interface'; // Interface moved to a separate file

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationsSubject: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>([]);
  notifications$: Observable<Notification[]> = this.notificationsSubject.asObservable();

  constructor() { }

  add(notification: Notification) {
    const currentNotifications = this.notificationsSubject.value;
    this.notificationsSubject.next([...currentNotifications, notification]);

    // Auto-dismiss the notification after 5 seconds
    setTimeout(() => this.remove(notification), 5000);
  }

  remove(notificationToRemove: Notification) {
    const currentNotifications = this.notificationsSubject.value;
    this.notificationsSubject.next(currentNotifications.filter(notification => notification !== notificationToRemove));
  }

  clear() {
    this.notificationsSubject.next([]);
  }
}
