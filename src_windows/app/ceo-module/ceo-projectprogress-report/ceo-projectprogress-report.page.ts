import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-projectprogress-report',
  templateUrl: './ceo-projectprogress-report.page.html',
  styleUrls: ['./ceo-projectprogress-report.page.scss'],
})
export class CeoProjectprogressReportPage implements OnInit {

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
    let formatedurl = this.baseurl + "/Reports_mobile/projectprogressreport";
    console.log(formatedurl)
    this.weburl = formatedurl;
  }
}
