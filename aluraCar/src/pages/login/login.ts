import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public email: string;
  public password: string;

  login() {
    console.log(this.email);
    console.log(this.password);
    this.navCtrl.setRoot(HomePage);    
  }

}
