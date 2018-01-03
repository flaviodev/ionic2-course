import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SchedulingDao } from '../../domain/scheduling/scheduling-dao';
import { Scheduling } from '../../domain/scheduling/scheduling';
import { SchedulingService } from './../../domain/scheduling/scheduling-service';
import { AlertController } from 'ionic-angular/components/alert/alert';

@Component({
  selector: 'page-scheduling',
  templateUrl: 'scheduling.html'
})
export class SchedulingPage implements OnInit {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _dao: SchedulingDao,
    private _service: SchedulingService,
    private _alertCtrl: AlertController) {}

  schedulings: Scheduling[] = [];

  ngOnInit() {
    this._dao.listAll().then((data)=> this.schedulings = data);
  }

  resend(scheduling: Scheduling) {
     this._service.reschedule(scheduling)
    .then((confirmed) => {
      confirmed ?  
        this._alertCtrl.create({
        title: "Resend",
        subTitle: "Scheduling successfully resent!",
        buttons: [{ text: "Ok"}]}).present() :
        this._alertCtrl.create({
        title: "Resend",
        subTitle: "Failed to resend schedule, try again later",
        buttons: [{ text: "Ok"}]}).present();
    });
  }
}