import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Car } from './../../domain/car/car';

@Component({
  templateUrl: 'registry.html'
})
export class RegistryPage implements OnInit {

  public car: Car;
  private totalAmount: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.car = this.navParams.get("car");
    this.totalAmount = this.navParams.get("totalAmount");
  }

  // just firs time
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistryPage');
  }
}
