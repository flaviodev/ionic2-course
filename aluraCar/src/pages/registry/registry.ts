import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'registry.html'
})
export class RegistryPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    
  }

  // just firs time
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistryPage');
  }

}
