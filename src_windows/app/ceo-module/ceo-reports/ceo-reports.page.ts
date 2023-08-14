import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ceo-reports',
  templateUrl: './ceo-reports.page.html',
  styleUrls: ['./ceo-reports.page.scss'],
})
export class CeoReportsPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

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
    ]
  ];

  constructor(
    private router: Router,
    private zone: NgZone,
  ) {}

  ngOnInit() {}

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
