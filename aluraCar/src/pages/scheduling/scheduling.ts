import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SchedulingDao } from '../../domain/scheduling/scheduling-dao';
import { Scheduling } from '../../domain/scheduling/scheduling';

@Component({
  selector: 'page-scheduling',
  templateUrl: 'scheduling.html'
})
export class SchedulingPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _dao: SchedulingDao) {}

  schedulings: Scheduling[] = [];

  ngOnInit() {
    this._dao.listAll().then((data)=> this.schedulings = data);
  }

}
