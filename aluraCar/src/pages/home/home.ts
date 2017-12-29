import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public carros;

  constructor(
    public navCtrl: NavController, 
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) {}

  ngOnInit() {
    let loader = this._loadingCtrl.create({
      content: "Getting new cars. Waiting ..."
    });

    loader.present();

    this._http
      .get('https://aluracar.herokuapp.com')
      .map(res => res.json())
      .toPromise()
      .then(carros => { 
        this.carros = carros;
        loader.dismiss();})
      .catch(err => { 
        loader.dismiss();
        this._alertCtrl.create({
          title : "Connection Failure",
          buttons : [{text: "Ok"}],
          subTitle: "It was not possible get cars list, try again later."
        }).present();
      });
  }
}
