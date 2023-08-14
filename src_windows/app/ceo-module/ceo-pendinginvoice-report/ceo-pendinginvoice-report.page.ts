import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-pendinginvoice-report',
  templateUrl: './ceo-pendinginvoice-report.page.html',
  styleUrls: ['./ceo-pendinginvoice-report.page.scss'],
})
export class CeoPendinginvoiceReportPage implements OnInit {
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
    let formatedurl = this.baseurl + "/Reports_mobile/pendinginvoicereport";
    console.log(formatedurl)
    this.weburl = formatedurl;
  }
}
