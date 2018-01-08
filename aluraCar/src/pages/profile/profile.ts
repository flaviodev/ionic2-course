import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from './../../domain/user/user-service';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit {

  public url: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _service: UserService,
    public camera: Camera) {}

    get principal() {

      return this._service.getPrincipal();
    }

    ngOnInit() {
      this.url = this._service.getAvatar();
    }

    takePicture() {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.FILE_URI,
        saveToPhotoAlbum: true, 
        correctOrientation: true
      }).then(url => {
        this._service.saveAvatar(url);
        this.url = url;
      })
      .catch(err => console.log(err));
    }
}
