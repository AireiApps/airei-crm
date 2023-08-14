import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { AuthGuardService } from "../services/authguard/auth-guard.service";
let userlist = JSON.parse(localStorage.getItem("userlist"));
let newRoutes: any;
let router: Router;
const routes_CEO: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabdashboard",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../ceo-module/ceo-dashboard/ceo-dashboard.module").then(
                (m) => m.CeoDashboardPageModule
              ),
          },
        ],
      },
      {
        path: "tabreports",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../ceo-module/ceo-reports/ceo-reports.module").then(
                (m) => m.CeoReportsPageModule
              ),
          },
        ],
      },
      {
        path: "tabprofile",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabdashboard",
        pathMatch: "full",
      },
    ],
  },
];
if (userlist) {
  if (userlist.name) {
    if (userlist.name == 'CEO Management') {
      newRoutes = routes_CEO;
    } else {
      localStorage.clear();
      router.navigateByUrl("/login");
    }
  } else {
    localStorage.clear();
    router.navigateByUrl("/login");
  }
} else {
  newRoutes = routes_CEO;
}

@NgModule({
  imports: [RouterModule.forChild(newRoutes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
