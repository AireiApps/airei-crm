import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { appsettings } from "../appsettings";
import { ToastController, LoadingController } from "@ionic/angular";
import { PreloadingserviceService } from "src/app/services/preloadingservice/preloadingservice.service";

const httpOptions = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: new HttpParams(),
};

@Injectable({
  providedIn: "root",
})
export class AIREIService {
  loading;
  isLoading = false;

  constructor(
    public httpClient: HttpClient,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public preloading: PreloadingserviceService
  ) {}

  formParams(params) {
    let postData = new FormData();
    if (params) {
      for (let k in params) {
        postData.append(k, params[k]);
      }
    }
    return postData;
  }
  updatePushNotification(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = localStorage.getItem("endpoint") + appsettings.login_token_update;

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          //console.log(data);

          resolve(data);
        },
        (error) => {
          console.log(error);

          if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }

          reject(error);
        }
      );
    });
  }

  signIn(req) {
    this.preloading.present();

    var api =
      appsettings.login +
      "?email=" +
      req.username +
      "&password=";
    let postData = JSON.stringify(req);
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          console.log(data);
          resolve(data);

          this.preloading.dismiss();
        },
        (error) => {
          console.log(error);

          reject(error);

          this.preloading.dismiss();

          if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }
        }
      );
    });
  }

  signUp(req, api) {
    let postData = "jsonData=" + JSON.stringify(req);
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, postData, httpOptions).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }

  signup(req) {
    var reqOpts: any;

    //console.log(JSON.stringify(req));

    reqOpts = this.formParams(req);
    var api = localStorage.getItem("endpoint") + appsettings.signup;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          //console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }


  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: "Loading...",
      duration: 1000,
      spinner: "circles",
      cssClass: "my-loading-class",
    });
    await this.loading.present();
  }

  async imagepresentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: "Image Uploading...",
      duration: 2000,
      spinner: "circles",
      cssClass: "my-loading-class",
      backdropDismiss: true,
    });
    await this.loading.present();
  }

  async presentsupervisordashboardLoading() {
    this.loading = await this.loadingCtrl.create({
      message: "Loading...",
      duration: 5000,
      spinner: "circles",
      cssClass: "my-loading-class",
    });
    await this.loading.present();
  }

  async dimmissLoading() {
    this.loading.onDidDismiss();
  }

  async startLoading() {
    this.isLoading = true;

    return await this.loadingCtrl
      .create({
        //duration: 5000,
        spinner: "circles",
        cssClass: "loading",
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => console.log("Abort Presenting"));
          }
        });
      });
  }

  async stopLoading() {
    this.isLoading = false;
    return await this.loadingCtrl
      .dismiss()
      .then(() => console.log("dismissed"));
  }
  getSettings(req) {
    var reqOpts: any;

    console.log(JSON.stringify(req));

    reqOpts = this.formParams(req);
    var api = localStorage.getItem("endpoint") + appsettings.mypalmsettings;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          /*if (error.status == 0) {
            this.presentToast("Unable to Connect Server");
          }*/

          reject(error);
        }
      );
    });
  }
}
