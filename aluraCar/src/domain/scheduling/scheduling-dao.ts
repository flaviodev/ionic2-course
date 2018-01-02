import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

import { Car } from './../car/car';
import { Scheduling } from './scheduling';

@Injectable()
export class SchedulingDao{

    constructor(private _storage: Storage) {}

    private _getKey(scheduling: Scheduling) {
        return scheduling.email + scheduling.date.substr(0,10);
    }

    save(scheduling: Scheduling) {
        return this._storage.set(this._getKey(scheduling), scheduling);
    }

    isDuplicatedScheduling(scheduling: Scheduling) {
        return this._storage.get(this._getKey(scheduling))
        .then(data => {
            return data ? true : false;
        })
    }

    listAll() {
        let schedulings = [];
        return this._storage.forEach(data => {
            let car: Car = new Car(data.car.nome, data.car.preco);
            let scheduling: Scheduling = new Scheduling(
                car,
                data.totalAmount,
                data.name,
                data.address,
                data.email,
                data.date,
                data.confirmed
            );

            schedulings.push(scheduling);
        })
        .then(()=> schedulings);

    }


}
