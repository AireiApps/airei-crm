import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-payment-report',
  templateUrl: './ceo-payment-report.page.html',
  styleUrls: ['./ceo-payment-report.page.scss'],
})
export class CeoPaymentReportPage implements OnInit {

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
    let formatedurl = this.baseurl + "/Reports_mobile/paymentreport";
    console.log(formatedurl)
    this.weburl = formatedurl;
  }
}
