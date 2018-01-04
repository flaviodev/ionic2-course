import { UserService } from './../../domain/user/user-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _service: UserService,
    private _alertCtrl: AlertController) {}

  public email: string = "joao@alura.com.br";
  public password: string = "alura123";

  login() {
    
    this._service.login(this.email, this.password)
      .then((user) => {
        console.log(user);
        this.navCtrl.setRoot(HomePage);    
      })
      .catch(() => {
        this._alertCtrl.create({
          title: "Authentication failure",
          subTitle: "Invalid email or password",
          buttons: [{ text: "Ok" }]
        }).present();
      });
  }
}
