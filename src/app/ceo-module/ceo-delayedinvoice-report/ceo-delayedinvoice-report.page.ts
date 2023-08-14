import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-delayedinvoice-report',
  templateUrl: './ceo-delayedinvoice-report.page.html',
  styleUrls: ['./ceo-delayedinvoice-report.page.scss'],
})
export class CeoDelayedinvoiceReportPage implements OnInit {

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
