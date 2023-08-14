import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "../api/api.service";
import { AppVersion } from "@ionic-native/app-version/ngx";
import { NativeStorage } from "@ionic-native/native-storage/ngx";

import {
  Animation,
  AnimationController,
  PopoverController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  @ViewChild("logo", { static: false }) logo: ElementRef;
  @ViewChild("footer", { static: false }) footer: ElementRef;
  @ViewChild("usernameinput") usernameInput;
  @ViewChild("passwordinput") passwordInput;

  app_version = "";

  registerCredentials = { username: "", password: "" };
  loginForm;
  userlist = JSON.parse(localStorage.getItem("userlist"));

  uiEnable = false;
  isDisabled = false;

  // Password View
  showPassword = false;
  passwordIcon = "eye-outline";

  constructor(
    private popoverController: PopoverController,
    private translate: TranslateService,
    private router: Router,
    private fb: FormBuilder,
    private location: Location,
    private appVersion: AppVersion,
    private service: AIREIService,
    private nativeStorage: NativeStorage,
    private screenOrientation: ScreenOrientation,
    private animationcontroller: AnimationController
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    const logoAnimation: Animation = this.animationcontroller
      .create()
      .addElement(this.logo.nativeElement)
      .duration(1500)
      .fromTo("opacity", "0", "1");

    logoAnimation.play();

    const footerAnimation: Animation = this.animationcontroller
      .create()
      .addElement(this.footer.nativeElement)
      .duration(1000)
      .fromTo("transform", "translateY(200px)", "translateY(0px)")
      .fromTo("opacity", "0", "1");

    footerAnimation.play();

    this.checkButtonFlag();
  }

  checkButtonFlag() {
    this.service.checkFlag().then((result) => {
      var resultdata: any;
      resultdata = result;

      //console.log(resultdata);

      if (resultdata.login_check == "1") {
        //console.log(resultdata.login_check);
        this.uiEnable = true;

        this.getVersion();
      } else {
        //console.log(resultdata.login_check);
        this.uiEnable = false;

        this.getVersion();
      }
    });
  }

  getVersion() {
    this.appVersion.getVersionNumber().then(
      (versionNumber) => {
        this.app_version = versionNumber;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onKeydown(event, nextfield) {
    if (event.key == "Enter" && nextfield == "username") {
      this.usernameInput.setFocus();
    } else if (event.key == "Enter" && nextfield == "password") {
      this.passwordInput.setFocus();
    } else if (event.key == "Enter" && nextfield == "done") {
      this.btn_login();
    }
  }

  togglePassword() {
    /*if (!this.isDisabled) {
      if (this.loginForm.value.password != "") {
        this.showPassword = !this.showPassword;

        if (this.passwordIcon == "eye-outline") {
          this.passwordIcon = "eye-off-outline";
        } else {
          this.passwordIcon = "eye-outline";
        }
      }
    }*/

    if (this.loginForm.value.password != "") {
      this.showPassword = !this.showPassword;

      if (this.passwordIcon == "eye-outline") {
        this.passwordIcon = "eye-off-outline";
      } else {
        this.passwordIcon = "eye-outline";
      }
    }
  }

  btn_login() {
    if (this.loginForm.value.username == "") {
      this.service.presentToast(
        this.translate.instant("LOGIN.usernameerrortoast")
      );
      return;
    }

    if (this.loginForm.value.password == "") {
      this.service.presentToast(
        this.translate.instant("LOGIN.passworderrortoast")
      );
      return;
    }

    console.log(localStorage.getItem("endpoint"));

    this.isDisabled = true;

    var req = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };

    console.log(req);

    this.service.signIn(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      this.loginForm.reset();

      if (resultdata.httpcode == 200) {
        //this.languageService.setLanguage("Malay");

        console.log(resultdata.data);

        localStorage.setItem("userlist", JSON.stringify(resultdata.data));

        localStorage.setItem("runninghourid", "0");

        localStorage.setItem("scheduledpopup", "");

        localStorage.setItem("profile", "");

        localStorage.setItem("notificationdata", "");

        this.nativeStorage
          .setItem("userlist", JSON.stringify(resultdata.data))
          .then(
            () => {
              console.log("Stored item!");
            },
            (error) => console.error("Error storing item", error)
          );

        this.service.presentToast(
          this.translate.instant("LOGIN.loginsuccessfully")
        );

        setTimeout(() => {
          this.isDisabled = false;
          this.location.go("/");
          window.location.reload();
          this.router.navigate(["/tabs"]);
        }, 1000);
      } else {
        console.log(resultdata.data);

        this.isDisabled = false;

        this.service.presentToast(resultdata.message);
      }
    });
  }

  signup() {
    this.router.navigate(["/signup"]);
  }
}
