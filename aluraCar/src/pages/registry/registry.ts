import { HomePage } from './../home/home';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Car } from './../../domain/car/car';
import { Alert } from 'ionic-angular/components/alert/alert';
import { Scheduling } from '../../domain/scheduling/scheduling';
import { SchedulingService } from './../../domain/scheduling/scheduling-service';
import { Vibration } from '@ionic-native/vibration'; 
import { DatePicker } from '@ionic-native/date-picker'; 


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
    private _alertCtrl: AlertController, 
    public vibration: Vibration,
    public datePicker: DatePicker) {}

  ngOnInit() {
    this.car = this.navParams.get("car");
    this.totalAmount = this.navParams.get("totalAmount");
    this.scheduling = new Scheduling();
    this.scheduling.car = this.car;
    this.scheduling.totalAmount = this.totalAmount;
    this.scheduling.date = new Date().toISOString();

    this.alert = this._alertCtrl.create({
      title: "Warning",
      buttons: [{ text: "Ok", handler: () => {this.navCtrl.setRoot(HomePage)}}]
    });
  }

  // just firs time
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistryPage');
  }

  toSchedule() {

    if(!this.scheduling.name || !this.scheduling.address || !this.scheduling.email) {

      this.vibration.vibrate(500);

      this._alertCtrl.create({
        title: 'Required field',
        subTitle: 'You must complete all the information',
        buttons: [{ text: 'Ok'}]
      }).present();

      return;
    }

    this._service.schedule(this.scheduling)
      .then((confirmed) => {
        confirmed ?
          this.alert.setSubTitle("Successful scheduling") :
          this.alert.setSubTitle("Failure scheduling");
        this.alert.present();      
      })
      .catch(err => {
        console.log(err);
        this.alert.setSubTitle(err.message);
        this.alert.present();      
      });
  }

  selectDate() {

    this.datePicker.show({
      date: new Date(), 
      mode: 'date'
    })
    .then(data => this.scheduling.date = data.toISOString());

  }
}
