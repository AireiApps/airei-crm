import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-notification-screen',
  templateUrl: './ceo-notification-screen.page.html',
  styleUrls: ['./ceo-notification-screen.page.scss'],
})
export class CeoNotificationScreenPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;

  baseurl = this.userlist.reporturl;


  weburl;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ionViewWillEnter() {
    this.getUrl();
  }

  getUrl() {
    let formatedurl = this.baseurl + "/Reports_mobile/delayinvoicereport";
    console.log(formatedurl)
    this.weburl = formatedurl;
  }
}
