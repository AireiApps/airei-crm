import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-purchasepending-report',
  templateUrl: './ceo-purchasepending-report.page.html',
  styleUrls: ['./ceo-purchasepending-report.page.scss'],
})
export class CeoPurchasependingReportPage implements OnInit {

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
    let formatedurl = this.baseurl + "/Reports_mobile/purchasependinginvoicereport";
    console.log(formatedurl)
    this.weburl = formatedurl;
  }
}
