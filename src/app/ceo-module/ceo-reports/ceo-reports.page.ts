import { Component, OnInit, NgZone } from "@angular/core";
import {
  ModalController,
  AlertController,
  Platform,
  Animation,
  AnimationController,
} from "@ionic/angular";
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
const { PushNotifications } = Plugins;
import { ActivatedRoute, Router } from "@angular/router";
import { AppVersion } from "@ionic-native/app-version/ngx";
import { AIREIService } from "src/app/api/api.service";
import { TranslateService } from "@ngx-translate/core";
import { Market } from "@ionic-native/market/ngx";

@Component({
  selector: "app-ceo-reports",
  templateUrl: "./ceo-reports.page.html",
  styleUrls: ["./ceo-reports.page.scss"],
})
export class CeoReportsPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  count = 0;
  pendingcount = 0;
  pendingcountlength = 0;

  getplatform: string;

  itemsArr = [
    [
      {
        title: "Project Progress",
        subtitle: "Report",
        name: "Project Progress Report",
        path: "/ceo-projectprogress-report",
        imgpath: "../../assets/img/project_progress.png",
      },
      {
        title: "Invoice",
        subtitle: "Report",
        name: "Invoice Report",
        path: "/ceo-invoice-report",
        imgpath: "../../assets/img/invoice.png",
      },
    ],
    [
      {
        title: "Pending Invoice",
        subtitle: "Report",
        name: "Pending Invoice Report",
        path: "/ceo-pendinginvoice-report",
        imgpath: "../../assets/img/cashflowstatementreport.png",
      },
      {
        title: "Received",
        subtitle: "Report",
        name: "Received Report",
        path: "/ceo-received-report",
        imgpath: "../../assets/img/summary.png",
      },
    ],
    [
      {
        title: "Upcoming Invoice",
        subtitle: "Report",
        name: "Upcoming Invoice Report",
        path: "/ceo-upcominginvoice-report",
        imgpath: "../../assets/img/planning.png",
      },
      {
        title: "Delayed Invoice",
        subtitle: "Report",
        name: "Delayed Invoice Report",
        path: "/ceo-delayedinvoice-report",
        imgpath: "../../assets/img/preventive_report.png",
      },
    ],
    [
      {
        title: "Payment",
        subtitle: "Report",
        name: "Payment Report",
        path: "/ceo-payment-report",
        imgpath: "../../assets/img/prepayment.png",
      },
      {
        title: "Purchase Pending",
        subtitle: "Invoice Report",
        name: "Purchase Pending Invoice Report",
        path: "/ceo-purchasepending-report",
        imgpath: "../../assets/img/palmoilquoteapproval.png",
      },
    ],
  ];

  constructor(
    private router: Router,
    private zone: NgZone,
    private platform: Platform,
    private activatedroute: ActivatedRoute,
    private notifi: AuthGuardService,
    private appVersion: AppVersion,
    private alertController: AlertController,
    private commonservice: AIREIService,
    private translate: TranslateService,
    private market: Market
  ) {
    this.activatedroute.params.subscribe((val) => {
      if (this.platform.is("android")) {
        this.getplatform = "android";
      } else if (this.platform.is("ios")) {
        this.getplatform = "ios";
      }

      this.getBellCount();
    });
  }

  ngOnInit() {}

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
  ionViewDidEnter() {
    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
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
        this.updateNotification();
        //this.getProductionPendingCount();
      }
    );
  }

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/ceo-notification-screen"]);
  }

  getBellCount() {
    let req = {
      userid: this.userlist.user_id,
    };

    this.commonservice.getBellcount(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.pendingcount = resultdata.count;
        this.pendingcountlength = this.pendingcount.toString().length;
      } else {
        this.pendingcount = 0;
        this.pendingcountlength = this.pendingcount.toString().length;
      }
    });
  }
}
