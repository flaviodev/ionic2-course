import { UserService } from './../../domain/user/user-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public url: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _service: UserService) {}

    get principal() {

      return this._service.getPrincipal();
    }

}
