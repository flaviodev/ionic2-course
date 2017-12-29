import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
    templateUrl: 'choose.html'
})
export class ChoosePage implements OnInit {
    
    public selectedCar;

    constructor(public navParams:NavParams) {}

    ngOnInit() {
        this.selectedCar = this.navParams.get("selectedCar");
    }

}