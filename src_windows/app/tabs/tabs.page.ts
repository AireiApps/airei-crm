// tslint:disable-next-line: triple-equals
// tslint:disable-next-line: use-lifecycle-interface

import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { HttpserviceService } from "../services/httpservice/httpservice.service";
import "rxjs/add/observable/interval";
import { Observable } from "rxjs";
import { IonTabs } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  @ViewChild("tabs") tabs: IonTabs;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  designationid = this.userlist.desigId;
  name = "";

  constructor(
    private httpservice: HttpserviceService,
    private zone: NgZone,
    private translate: TranslateService
  ) {
    // Observable.interval(10000)
    //   .subscribe((val) => {  });
    // this.zone.runOutsideAngular(() => {
    //   setInterval(() => { this.httpservice.getContacts(); }, 15 * 60 * 1000);
    // });
    // this.zone.runOutsideAngular(() => {
    //   setInterval(() => { this.httpservice.getPermissonContacts(); }, 1000);
    // });
  }

  ngOnInit() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    this.name = this.userlist.name;
  }

  ionViewDidEnter() {
    this.name = this.userlist.name;

    /*if (this.designationid == 5 || this.designationid == 11) {
      this.tabs.select("tabmaintenancehome");
    }*/
  }

  getTabCheck(getname) {
    // tslint:disable-next-line: triple-equals
    if (this.name == getname) {
      return true;
    } else {
      return false;
    }
  }
}
