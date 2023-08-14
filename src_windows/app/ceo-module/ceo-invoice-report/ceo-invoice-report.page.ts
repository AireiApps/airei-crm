import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-invoice-report',
  templateUrl: './ceo-invoice-report.page.html',
  styleUrls: ['./ceo-invoice-report.page.scss'],
})
export class CeoInvoiceReportPage implements OnInit {

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
    let formatedurl = this.baseurl + "/Reports_mobile/invoicereport";
    console.log(formatedurl)
    this.weburl = formatedurl;
  }
}
