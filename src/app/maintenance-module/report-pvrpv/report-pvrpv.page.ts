import { Component, OnInit, NgZone } from "@angular/core";
import { FormControl, FormBuilder, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { MaintenanceServiceService } from "src/app/services/maintenance-serivce/maintenance-service.service";
import * as moment from "moment";
import { LanguageService } from "src/app/services/language-service/language.service";
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
const { PushNotifications } = Plugins;
import { TranslateService } from "@ngx-translate/core";

import { DatePickerPluginInterface } from "@capacitor-community/date-picker";
const DatePicker: DatePickerPluginInterface = Plugins.DatePickerPlugin as any;

@Component({
  selector: "app-report-pvrpv",
  templateUrl: "./report-pvrpv.page.html",
  styleUrls: ["./report-pvrpv.page.scss"],
})
export class ReportPvrpvPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  departmentid = this.userlist.dept_id;

  routineForm;
  replacementForm;

  routinenotificationlistArr = [];
  replacementnotificationlistArr = [];

  count = 0;

  norecordroutineenableflag = false;
  norecordreplacementenableflag = false;
  pleasewaitflag = false;

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  //routinefromdate = moment(new Date().toISOString()).format("DD-MM-YYYY");
  //routinetodate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  routinefromdate = "";
  routinetodate = "";

  //replacementfromdate = moment(new Date().toISOString()).format("DD-MM-YYYY");
  //replacementtodate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  replacementfromdate = "";
  replacementtodate = "";

  tabs_segment;

  constructor(
    private languageService: LanguageService,
    private translate: TranslateService,
    private zone: NgZone,
    private fb: FormBuilder,
    private router: Router,
    private notifi: AuthGuardService,
    private commonservice: AIREIService,
    private service: MaintenanceServiceService
  ) {
    this.routineForm = this.fb.group({
      txt_fromdate: new FormControl(""),
      txt_todate: new FormControl(""),
    });

    this.replacementForm = this.fb.group({
      txt_fromdate: new FormControl(""),
      txt_todate: new FormControl(""),
    });

    this.tabs_segment = "Routine";
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    /*PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();*/

    if (this.tabs_segment == "Routine") {
      this.getRoutineNotification();
    } else {
      this.getReplacementNotification();
    }
  }

  ionViewDidEnter() {
    /*PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();*/

    if (this.tabs_segment == "Routine") {
      this.getRoutineNotification();
    } else {
      this.getReplacementNotification();
    }
  }

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/segregatenotification"]);
  }

  updateNotification() {
    this.zone.run(() => {
      this.count = parseInt(localStorage.getItem("badge_count"));
    });
  }

  getLiveNotification() {
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        // alert('Push received: ' + JSON.stringify(notification));
        this.updateNotification();
      }
    );
  }

  getStatusTextColor(status) {
    let color;

    if (status == "1") {
      color = "#cb4335";
    }

    if (status == "2") {
      color = "#ff9f0c";
    }

    if (status == "3") {
      color = "#ff9f0c";
    }

    if (status == "4") {
      color = "#9b59b6";
    }

    if (status == "5") {
      color = "#f39c12";
    }

    if (status == "6") {
      color = "#007bb3";
    }

    if (status == "7") {
      color = "#008000";
    }

    if (status == "8") {
      color = "#616161";
    }

    if (status == "9") {
      color = "#e74c3c";
    }

    if (status == "10") {
      color = "#409b00";
    }

    return color;
  }

  /* Date Pickers - Start */
  openRoutFromDateTimePicker() {
    DatePicker.present({
      mode: "date",
      format: "dd-MM-yyyy",
      date: this.routinefromdate,
      max: this.currentdate,
      theme: "dark",
      doneText: this.translate.instant("GENERALBUTTON.done"),
      cancelText: this.translate.instant("GENERALBUTTON.cancelbutton"),
    }).then(
      (val) => {
        if (val.value) {
          this.routinefromdate = val.value;
          this.routineForm.controls.txt_fromdate.setValue(this.routinefromdate);
        }
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  }

  openRoutToDateTimePicker() {
    DatePicker.present({
      mode: "date",
      format: "dd-MM-yyyy",
      date: this.routinetodate,
      max: this.currentdate,
      theme: "dark",
      doneText: this.translate.instant("GENERALBUTTON.done"),
      cancelText: this.translate.instant("GENERALBUTTON.cancelbutton"),
    }).then(
      (val) => {
        if (val.value) {
          this.routinetodate = val.value;
          this.routineForm.controls.txt_todate.setValue(this.routinetodate);
        }
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  }

  openReplFromDateTimePicker() {
    DatePicker.present({
      mode: "date",
      format: "dd-MM-yyyy",
      date: this.replacementfromdate,
      max: this.currentdate,
      theme: "dark",
      doneText: this.translate.instant("GENERALBUTTON.done"),
      cancelText: this.translate.instant("GENERALBUTTON.cancelbutton"),
    }).then(
      (val) => {
        if (val.value) {
          this.replacementfromdate = val.value;
          this.replacementForm.controls.txt_fromdate.setValue(
            this.replacementfromdate
          );
        }
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  }

  openReplToDateTimePicker() {
    DatePicker.present({
      mode: "date",
      format: "dd-MM-yyyy",
      date: this.replacementtodate,
      max: this.currentdate,
      theme: "dark",
      doneText: this.translate.instant("GENERALBUTTON.done"),
      cancelText: this.translate.instant("GENERALBUTTON.cancelbutton"),
    }).then(
      (val) => {
        if (val.value) {
          this.replacementtodate = val.value;
          this.replacementForm.controls.txt_todate.setValue(
            this.replacementtodate
          );
        }
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  }
  /* Date Pickers - End */

  getRoutineNotification() {
    let getfromdate;
    let gettodate;

    if (this.routinefromdate != "" || this.routinetodate != "") {
      getfromdate = moment(this.routinefromdate, "DD-MM-YYYY").format(
        "YYYY-MM-DD"
      );
      gettodate = moment(this.routinetodate, "DD-MM-YYYY").format("YYYY-MM-DD");
    } else {
      getfromdate = "";
      gettodate = "";
    }

    this.routinenotificationlistArr = [];
    this.norecordroutineenableflag = false;
    this.pleasewaitflag = true;

    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      Fromdate: getfromdate,
      Todate: gettodate,
      pvflag: 1,
      language: this.languageService.selected,
    };

    //this.commonservice.presentToast(req);

    this.service.getPVRPVReport(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (this.routinefromdate == "" || this.routinetodate == "") {
        this.routinefromdate = moment(resultdata.Fromdate, "YYYY-MM-DD").format(
          "DD-MM-YYYY"
        );

        this.routineForm.controls.txt_fromdate.setValue(this.routinefromdate);

        this.routinetodate = moment(resultdata.Todate, "YYYY-MM-DD").format(
          "DD-MM-YYYY"
        );

        this.routineForm.controls.txt_todate.setValue(this.routinetodate);
      }

      if (resultdata.httpcode == 200) {
        this.routinenotificationlistArr = resultdata.data;

        this.norecordroutineenableflag = false;

        this.pleasewaitflag = false;
      } else {
        this.routinenotificationlistArr = [];

        this.norecordroutineenableflag = true;

        this.pleasewaitflag = false;
      }
    });
  }

  getReplacementNotification() {
    let getfromdate;
    let gettodate;

    if (this.replacementfromdate != "" || this.replacementtodate != "") {
      getfromdate = moment(this.replacementfromdate, "DD-MM-YYYY").format(
        "YYYY-MM-DD"
      );
      gettodate = moment(this.replacementtodate, "DD-MM-YYYY").format(
        "YYYY-MM-DD"
      );
    } else {
      getfromdate = "";
      gettodate = "";
    }

    this.replacementnotificationlistArr = [];
    this.norecordreplacementenableflag = false;
    this.pleasewaitflag = true;

    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      Fromdate: getfromdate,
      Todate: gettodate,
      pvflag: 2,
      language: this.languageService.selected,
    };

    //this.commonservice.presentToast(req);

    this.service.getPVRPVReport(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (this.replacementfromdate == "" || this.replacementtodate == "") {
        this.replacementfromdate = moment(
          resultdata.Fromdate,
          "YYYY-MM-DD"
        ).format("DD-MM-YYYY");

        this.replacementForm.controls.txt_fromdate.setValue(
          this.replacementfromdate
        );

        this.replacementtodate = moment(resultdata.Todate, "YYYY-MM-DD").format(
          "DD-MM-YYYY"
        );

        this.replacementForm.controls.txt_todate.setValue(
          this.replacementtodate
        );
      }

      if (resultdata.httpcode == 200) {
        this.replacementnotificationlistArr = resultdata.data;

        this.norecordreplacementenableflag = false;

        this.pleasewaitflag = false;
      } else {
        this.replacementnotificationlistArr = [];

        this.norecordreplacementenableflag = true;

        this.pleasewaitflag = false;
      }
    });
  }

  segmentChanged(ev: any) {
    //console.log("Segment changed", ev.detail.value);
    if (ev.detail.value == "Routine") {
      this.routinenotificationlistArr = [];

      this.getRoutineNotification();
    }

    if (ev.detail.value == "Replacement") {
      this.replacementnotificationlistArr = [];

      this.getReplacementNotification();
    }
  }

  btn_PVNotificationView(value) {
    if (this.tabs_segment == "Routine") {
      this.router.navigate([
        "/maintenance-notification-view",
        { item: JSON.stringify(value), from: "RoPMReport" },
      ]);
    } else {
      this.router.navigate([
        "/maintenance-notification-view",
        { item: JSON.stringify(value), from: "RePMReport" },
      ]);
    }
  }
}
