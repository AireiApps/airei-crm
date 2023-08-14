import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./services/authguard/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tabs",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "tabs",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "more",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./more/more.module").then((m) => m.MorePageModule),
  },
  {
    path: "forgotpassword",
    loadChildren: () =>
      import("./forgot-password/forgotpassword/forgotpassword.module").then(
        (m) => m.ForgotpasswordPageModule
      ),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "networkconnectionerror",
    loadChildren: () =>
      import("./networkconnectionerror/networkconnectionerror.module").then(
        (m) => m.NetworkconnectionerrorPageModule
      ),
  },
  {
    path: "splash",
    loadChildren: () =>
      import("./splash/splash.module").then((m) => m.SplashPageModule),
  },
  {
    path: "ceo-dashboard",
    loadChildren: () =>
      import("./ceo-module/ceo-dashboard/ceo-dashboard.module").then((m) => m.CeoDashboardPageModule),
  },
  {
    path: "ceo-reports",
    loadChildren: () =>
      import("./ceo-module/ceo-reports/ceo-reports.module").then((m) => m.CeoReportsPageModule),
  },
  {
    path: 'ceo-projectprogress-report',
    loadChildren: () => import('./ceo-module/ceo-projectprogress-report/ceo-projectprogress-report.module').then( m => m.CeoProjectprogressReportPageModule)
  },
  {
    path: 'ceo-invoice-report',
    loadChildren: () => import('./ceo-module/ceo-invoice-report/ceo-invoice-report.module').then( m => m.CeoInvoiceReportPageModule)
  },
  {
    path: 'ceo-pendinginvoice-report',
    loadChildren: () => import('./ceo-module/ceo-pendinginvoice-report/ceo-pendinginvoice-report.module').then( m => m.CeoPendinginvoiceReportPageModule)
  },
  {
    path: 'ceo-received-report',
    loadChildren: () => import('./ceo-module/ceo-received-report/ceo-received-report.module').then( m => m.CeoReceivedReportPageModule)
  },
  {
    path: 'ceo-upcominginvoice-report',
    loadChildren: () => import('./ceo-module/ceo-upcominginvoice-report/ceo-upcominginvoice-report.module').then( m => m.CeoUpcominginvoiceReportPageModule)
  },
  {
    path: 'ceo-delayedinvoice-report',
    loadChildren: () => import('./ceo-module/ceo-delayedinvoice-report/ceo-delayedinvoice-report.module').then( m => m.CeoDelayedinvoiceReportPageModule)
  },
  {
    path: 'ceo-payment-report',
    loadChildren: () => import('./ceo-module/ceo-payment-report/ceo-payment-report.module').then( m => m.CeoPaymentReportPageModule)
  },
  {
    path: 'ceo-purchasepending-report',
    loadChildren: () => import('./ceo-module/ceo-purchasepending-report/ceo-purchasepending-report.module').then( m => m.CeoPurchasependingReportPageModule)
  },
  {
    path: 'ceo-notification-screen',
    loadChildren: () => import('./ceo-module/ceo-notification-screen/ceo-notification-screen.module').then( m => m.CeoNotificationScreenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
