import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-received-report',
  templateUrl: './ceo-received-report.page.html',
  styleUrls: ['./ceo-received-report.page.scss'],
})
export class CeoReceivedReportPage implements OnInit {

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
    let formatedurl = this.baseurl + "/Reports_mobile/receivedreport";

    console.log(formatedurl)
    this.weburl = formatedurl;
  }
}
