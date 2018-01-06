import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from './../../domain/user/user-service';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit {

  public url: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _service: UserService) {}

    get principal() {

      return this._service.getPrincipal();
    }

    ngOnInit() {
      this.url = this._service.getAvatar();
    }

    takePicture() {
      Camera.getPicture({
        destinationType: Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum: true, 
        correctOrientation: true
      }).then(url => {
        this._service.saveAvatar(url);
        this.url = url;
      })
      .catch(err => console.log(err));
    }
}
