import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http'

import { Car } from './../../domain/car/car';
import { ChoosePage } from './../choose/choose';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public cars: Car[];

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
      .then(cars => { 
        this.cars = cars;
        loader.dismiss();})
      .catch(err => { 
        loader.dismiss();
        this._alertCtrl.create({
          title : "Connection Failure",
          buttons : [{text: "Ok"}],
          subTitle: "Could not get list of cars, please try again later."
        }).present();
      });
  }

  select(car: Car) {
    this.navCtrl.push(ChoosePage, {selectedCar : car});
  }
}
