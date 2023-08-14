import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-upcominginvoice-report',
  templateUrl: './ceo-upcominginvoice-report.page.html',
  styleUrls: ['./ceo-upcominginvoice-report.page.scss'],
})
export class CeoUpcominginvoiceReportPage implements OnInit {

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
    let formatedurl = this.baseurl + "/Reports_mobile/upcominginvoicereport";

    console.log(formatedurl)
    this.weburl = formatedurl;
  }
}
