import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  notificationList: boolean = false

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.notificationList = true
    }, 4000);
  }

}
