import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SchedulingPage } from './../pages/scheduling/scheduling';

import { LoginPage } from './../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;

  public pages = [
    { title: "Schedulings", component: SchedulingPage },
    { title: "Profile", component: ProfilePage }
  ];

  @ViewChild(Nav) public nav: Nav;

  constructor(
    platform: Platform,
    public splashscreen: SplashScreen,
    public statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
