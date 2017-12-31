import { SchedulingService } from './../../domain/scheduling/scheduling-service';
import { HomePage } from './../home/home';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Car } from './../../domain/car/car';
import { Alert } from 'ionic-angular/components/alert/alert';
import { Scheduling } from '../../domain/scheduling/scheduling';

@Component({
  templateUrl: 'registry.html'
})
export class RegistryPage implements OnInit {

  public car: Car;
  private totalAmount: number;

  private scheduling: Scheduling;
  private alert: Alert;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _service: SchedulingService,
    private _alertCtrl: AlertController) {}

  ngOnInit() {
    this.car = this.navParams.get("car");
    this.totalAmount = this.navParams.get("totalAmount");
    this.scheduling = new Scheduling();
    this.scheduling.car = this.car;
    this.scheduling.totalAmount = this.totalAmount;
    this.scheduling.date = new Date().toISOString();

    this.alert = this._alertCtrl.create({
      title: "Warning",
      buttons: [{ text: "Ok", handler: () => this.navCtrl.setRoot(HomePage)}]
    });
  }

  // just firs time
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistryPage');
  }

  toSchedule() {
    this._service.schedule(this.scheduling)
      .then((confirmed) => {
        confirmed ?
          this.alert.setSubTitle("Successful scheduling") :
          this.alert.setSubTitle("Failure scheduling");
        this.alert.present();      
      });
  }
}
