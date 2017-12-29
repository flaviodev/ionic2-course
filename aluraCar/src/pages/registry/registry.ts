import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import { Car } from './../../domain/car/car';

@Component({
  templateUrl: 'registry.html'
})
export class RegistryPage implements OnInit {

  public car: Car;
  private totalAmount: number;

  private schedule;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _http: Http) {}

  ngOnInit() {
    this.car = this.navParams.get("car");
    this.totalAmount = this.navParams.get("totalAmount");
    this.schedule = {date: new Date().toISOString()};
  }

  // just firs time
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistryPage');
  }

  toSchedule() {
    let api = "https://aluracar.herokuapp.com/salvarpedido?carro="+
              this.car.nome
              +"&nome="+
              this.schedule.name
              +"&preco="+
              this.totalAmount
              +"&endereco="+
              this.schedule.address
              +"&email="+
              this.schedule.email
              +"&dataAgendamento="+
              this.schedule.date;
    this._http
    .get(api)
    .toPromise()
    .then(() => alert('sucesso'))
    .catch(err => alert(err));
  }
}
