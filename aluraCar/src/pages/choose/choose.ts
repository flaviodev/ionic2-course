import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
    templateUrl: 'choose.html'
})
export class ChoosePage implements OnInit {
    
    public selectedCar;
    public accessories;
    private _totalAmount: number;

    get totalAmount(): number {
        return this._totalAmount;
    }

    constructor(public navParams:NavParams) {}

    ngOnInit() {
        this.selectedCar = this.navParams.get("selectedCar");
        this._totalAmount = this.selectedCar.preco;
        this.accessories = [
            { name: 'ABS Brake', price: 800 },
            { name: 'Air Conditioning', price: 1000 },
            { name: 'MP3 Player', price: 500 }
        ];
    }

    updateTotal(on: boolean, accesssory) {
        on ? 
            this._totalAmount+=accesssory.price :
            this._totalAmount-=accesssory.price;
    }
}